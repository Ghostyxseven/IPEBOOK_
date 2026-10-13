const path = require("node:path");
const Module = require("node:module");

const orig = Module._resolveFilename;
const mockPath = path.resolve(__dirname, "mocks/react-native.cjs");

Module._resolveFilename = function (req, ...args) {
  if (req === "react-native") {
    return mockPath;
  }
  return orig.call(this, req, ...args);
};
