import React from "react";
import { View, StyleSheet } from "react-native";
import AppTitle from "./AppTitle/AppTitle";
import RepositoryList from "./Repository/RepositoryList";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppTitle />
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
});

export default Main;
