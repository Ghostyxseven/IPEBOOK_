import React from "react";
import { View } from "./react-native";

export const SafeAreaView = React.forwardRef<any, any>((props, ref) =>
  React.createElement(View, { ...props, ref }, props.children)
);
SafeAreaView.displayName = "SafeAreaView";

export const SafeAreaProvider = ({ children }: { children?: React.ReactNode }) => children;
export const SafeAreaConsumer = ({ children }: { children: (insets: any) => React.ReactNode }) =>
  children({ top: 0, bottom: 0, left: 0, right: 0 });
export const useSafeAreaInsets = () => ({ top: 0, bottom: 0, left: 0, right: 0 });

export default {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaConsumer,
  useSafeAreaInsets,
};
