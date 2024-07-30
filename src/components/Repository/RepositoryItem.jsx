import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryStats from "./repositoryStats";
import RepositoryHeader from "./RepositoryHeader";

export default function RepositoryItem(props) {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
