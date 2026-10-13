const React = require("react");

function SymbolView(props) {
  return React.createElement("SymbolView", props, props.children);
}

module.exports = {
  SymbolView,
};
