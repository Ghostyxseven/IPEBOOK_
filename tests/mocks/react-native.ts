import React from "react";

export const View = React.forwardRef<any, any>((props, ref) =>
  React.createElement("View", { ...props, ref }, props.children)
);
View.displayName = "View";

export const Text = React.forwardRef<any, any>((props, ref) =>
  React.createElement("Text", { ...props, ref }, props.children)
);
Text.displayName = "Text";

export const Pressable = React.forwardRef<any, any>((props, ref) =>
  React.createElement(
    "Pressable",
    {
      ...props,
      ref,
      onClick: props.onPress,
      accessibilityRole: props.accessibilityRole ?? "button",
    },
    typeof props.children === "function" ? props.children({ pressed: false }) : props.children
  )
);
Pressable.displayName = "Pressable";

export const ActivityIndicator = React.forwardRef<any, any>((props, ref) =>
  React.createElement("ActivityIndicator", { ...props, ref })
);
ActivityIndicator.displayName = "ActivityIndicator";

export const StyleSheet = {
  create: <T extends Record<string, any>>(styles: T): T => styles,
  flatten: (style: any): any => {
    if (!style) return {};
    if (Array.isArray(style)) {
      return Object.assign({}, ...style.map(StyleSheet.flatten));
    }
    return style;
  },
};

export const Platform = {
  OS: "ios",
  select: (obj: any) => obj.ios ?? obj.default,
};

export default {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Platform,
};
