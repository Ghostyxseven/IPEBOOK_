const path = require("node:path");
const Module = require("node:module");

const orig = Module._resolveFilename;
const mockRnPath = path.resolve(__dirname, "mocks/react-native.cjs");
const mockSafePath = path.resolve(__dirname, "mocks/react-native-safe-area-context.cjs");

Module._resolveFilename = function (req, ...args) {
  if (req === "react-native") {
    return mockRnPath;
  }
  if (req === "react-native-safe-area-context") {
    return mockSafePath;
  }
  return orig.call(this, req, ...args);
};
