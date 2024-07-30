import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {},
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecundary: {
    color: theme.colors.textSecundary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  align: {
    textAlign: "center",
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  textAlign,
  ...restOfProps
}) {
  const textStytles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecundary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    textAlign === "center" && styles.align,
    style,
  ];
  return (
    <Text style={textStytles} {...restOfProps}>
      {children}
    </Text>
  );
}
