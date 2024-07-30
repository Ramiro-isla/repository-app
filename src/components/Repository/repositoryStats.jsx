import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

export default function RepositoryStats({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) {
  const parseThousand = (value) => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
  };

  return (
    <View style={styles.container}>
      <View>
        <StyledText textAlign="center" fontWeight="bold">
          {parseThousand(stargazersCount)}
        </StyledText>
        <StyledText>Stars</StyledText>
      </View>
      <View>
        <StyledText textAlign="center" fontWeight="bold">
          {parseThousand(forksCount)}
        </StyledText>
        <StyledText>Forks</StyledText>
      </View>
      <View>
        <StyledText textAlign="center" fontWeight="bold">
          {parseThousand(reviewCount)}
        </StyledText>
        <StyledText>Reviews</StyledText>
      </View>
      <View>
        <StyledText textAlign="center" fontWeight="bold">
          {parseThousand(ratingAverage)}
        </StyledText>
        <StyledText>Rating</StyledText>
      </View>
    </View>
  );
}

RepositoryStats.propTypes = {
  stargazersCount: PropTypes.number.isRequired,
  forksCount: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  ratingAverage: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
