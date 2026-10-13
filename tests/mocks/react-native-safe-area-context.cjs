const React = require("react");
const { View } = require("./react-native.cjs");

const SafeAreaView = React.forwardRef((props, ref) =>
  React.createElement(View, { ...props, ref }, props.children)
);
SafeAreaView.displayName = "SafeAreaView";

module.exports = {
  SafeAreaView,
  SafeAreaProvider: ({ children }) => children,
  SafeAreaConsumer: ({ children }) => children({ top: 0, bottom: 0, left: 0, right: 0 }),
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  default: {
    SafeAreaView,
  },
};
