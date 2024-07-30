import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "../Repository/StyledText";
import Constants from "expo-constants";
import theme from "../theme";

const AppTitle = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.title}>
        Repositories
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.AppTitle.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: theme.AppTitle.textPrimary,
    marginLeft: 10,
    fontSize: 20,
  },
  title: {
    color: theme.AppTitle.textPrimary,
    fontSize: 20,
  },
});

export default AppTitle;
