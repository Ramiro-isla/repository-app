import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import repositories from "../../data/repositories";
import RepositoryItem from "./RepositoryItem";

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 30,
  },
});
