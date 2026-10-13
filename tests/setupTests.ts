import Module from "node:module";
import { fileURLToPath } from "node:url";
import { expect, vi } from "vitest";

vi.mock("expo-symbols", () => ({
  SymbolView: (props: any) => null,
}));

const mockPath = fileURLToPath(new URL("./mocks/react-native.cjs", import.meta.url));

// Redireciona qualquer require('react-native') feito pelo RNTL para o mock nativo
// @ts-expect-error interceptando resolução de módulo do Node
const origResolve = Module._resolveFilename;
// @ts-expect-error interceptando resolução de módulo do Node
Module._resolveFilename = function (req: string, ...args: any[]) {
  if (req === "react-native") {
    return mockPath;
  }
  return origResolve.call(this, req, ...args);
};

const anyGlobal = globalThis as unknown as { expect: typeof expect };
if (!anyGlobal.expect) {
  anyGlobal.expect = expect;
}

