import { expect } from "vitest";

// Garante que expect esteja no global se alguma biblioteca precisar
if (!globalThis.expect) {
  // @ts-expect-error global expect
  globalThis.expect = expect;
}
