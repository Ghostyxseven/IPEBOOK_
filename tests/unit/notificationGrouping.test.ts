import { describe, expect, it } from "vitest";
import type { AppNotification } from "@/model/entities/notification";
import { groupNotificationsByPeriod, periodOf } from "@/viewmodel/notificationGrouping";

const AGORA = new Date("2026-10-20T15:00:00-03:00");

function notificacao(id: string, createdAt: string): AppNotification {
  return {
    id,
    userId: "user-1",
    title: `Título ${id}`,
    message: `Mensagem ${id}`,
    type: "system",
    read: false,
    createdAt,
  };
}

describe("periodOf", () => {
  it("classifica como Hoje qualquer horário do dia corrente", () => {
    expect(periodOf("2026-10-20T00:10:00-03:00", AGORA)).toBe("today");
    expect(periodOf("2026-10-20T23:50:00-03:00", AGORA)).toBe("today");
  });

  it("classifica os seis dias anteriores como Esta semana", () => {
    expect(periodOf("2026-10-19T22:00:00-03:00", AGORA)).toBe("week");
    expect(periodOf("2026-10-14T08:00:00-03:00", AGORA)).toBe("week");
  });

  it("classifica o sétimo dia anterior e os mais antigos como Antes", () => {
    expect(periodOf("2026-10-13T23:00:00-03:00", AGORA)).toBe("earlier");
    expect(periodOf("2026-01-02T10:00:00-03:00", AGORA)).toBe("earlier");
  });

  it("trata data inválida como Antes em vez de quebrar a lista", () => {
    expect(periodOf("data-invalida", AGORA)).toBe("earlier");
  });
});

describe("groupNotificationsByPeriod", () => {
  it("agrupa na ordem Hoje, Esta semana e Antes com os títulos do Figma 07.04", () => {
    const secoes = groupNotificationsByPeriod(
      [
        notificacao("antiga", "2026-09-01T10:00:00-03:00"),
        notificacao("hoje", "2026-10-20T09:00:00-03:00"),
        notificacao("semana", "2026-10-17T09:00:00-03:00"),
      ],
      AGORA,
    );

    expect(secoes.map((secao) => secao.title)).toEqual(["Hoje", "Esta semana", "Antes"]);
    expect(secoes[0].data.map((item) => item.id)).toEqual(["hoje"]);
    expect(secoes[1].data.map((item) => item.id)).toEqual(["semana"]);
    expect(secoes[2].data.map((item) => item.id)).toEqual(["antiga"]);
  });

  it("preserva a ordem recebida dentro de cada período", () => {
    const secoes = groupNotificationsByPeriod(
      [
        notificacao("a", "2026-10-20T08:00:00-03:00"),
        notificacao("b", "2026-10-20T12:00:00-03:00"),
      ],
      AGORA,
    );

    expect(secoes).toHaveLength(1);
    expect(secoes[0].data.map((item) => item.id)).toEqual(["a", "b"]);
  });

  it("omite períodos sem notificações", () => {
    const secoes = groupNotificationsByPeriod([notificacao("a", "2026-10-18T08:00:00-03:00")], AGORA);

    expect(secoes.map((secao) => secao.period)).toEqual(["week"]);
  });

  it("devolve lista vazia quando não há notificações", () => {
    expect(groupNotificationsByPeriod([], AGORA)).toEqual([]);
  });
});
