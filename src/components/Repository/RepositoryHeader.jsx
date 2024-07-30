import React from "react";
import { View, Image, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import theme from "../theme";
import StyledText from "./StyledText";

export default function RepositoryHeader({ ownerAvatarUrl, fullName, description, language }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={styles.info}>
        <StyledText fontWeight="bold">{fullName}</StyledText>
        <StyledText color="secondary">{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  );
}

RepositoryHeader.propTypes = {
  ownerAvatarUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  info: {
    flex: 1,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    paddingVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  imageContainer: {
    paddingRight: 10,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
});
