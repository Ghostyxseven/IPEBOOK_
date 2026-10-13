import { createElement } from "react";
import { act, create, type ReactTestRenderer } from "react-test-renderer";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DomainError } from "@/model/errors";
import type { Book } from "@/model/entities/book";
import type { IBookUseCases } from "@/usecase/iBookUseCases";
import { useHomeViewModel } from "@/viewmodel/useHomeViewModel";

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
const mounted: ReactTestRenderer[] = [];

async function mount(useCases: IBookUseCases) {
  let result!: ReturnType<typeof useHomeViewModel>;
  const states: boolean[] = [];
  function Probe() {
    result = useHomeViewModel(useCases);
    states.push(result[0].loading);
    return null;
  }
  await act(async () => { mounted.push(create(createElement(Probe))); });
  return { get current() { return result; }, states };
}

afterEach(async () => {
  await act(async () => { mounted.splice(0).forEach((tree) => tree.unmount()); });
});

describe("estado da tela inicial", () => {
  it("passa pelo carregamento e apresenta catálogo vazio", async () => {
    const hook = await mount({ listBooks: async () => [] });
    expect(hook.states).toContain(true);
    expect(hook.current[0]).toEqual({ books: [], loading: false, error: null });
  });

  it("apresenta os livros retornados", async () => {
    const books = [{ id: "1", title: "Livro", author: "Autora" }];
    const hook = await mount({ listBooks: async () => books });
    expect(hook.current[0].books).toEqual(books);
  });

  it("mostra erro amigável e permite nova tentativa", async () => {
    const listBooks = vi.fn().mockRejectedValueOnce(new DomainError("Catálogo indisponível.")).mockResolvedValueOnce([]);
    const hook = await mount({ listBooks });
    expect(hook.current[0].error).toBe("Catálogo indisponível.");
    await act(async () => { await hook.current[1].reload(); });
    expect(hook.current[0]).toEqual({ books: [], loading: false, error: null });
    expect(listBooks).toHaveBeenCalledTimes(2);
  });

  it("não expõe detalhes técnicos de erros inesperados", async () => {
    const hook = await mount({ listBooks: async () => { throw new Error("detalhe interno"); } });
    expect(hook.current[0].error).toBe("Não foi possível carregar os livros. Tente novamente.");
    expect(hook.current[0].loading).toBe(false);
  });

  it("ignora resultado antigo quando uma nova tentativa termina primeiro", async () => {
    let resolveFirst!: (books: readonly Book[]) => void;
    const pending = new Promise<readonly Book[]>((resolve) => { resolveFirst = resolve; });
    const books = [{ id: "2", title: "Resultado recente", author: "Autora" }];
    const listBooks = vi.fn().mockReturnValueOnce(pending).mockResolvedValueOnce(books);
    const hook = await mount({ listBooks });
    expect(hook.current[0].loading).toBe(true);
    await act(async () => { await hook.current[1].reload(); });
    await act(async () => { resolveFirst([]); });
    expect(hook.current[0].books).toEqual(books);
  });
});
