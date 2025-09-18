import { ShiftCard } from "@features/shiftCard";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Shift } from "@entities/shift";

export const ShiftDetailScreen: React.FC = ({ route }) => {
  const { shift }: { shift: Shift } = route.params;

  return (
    <View style={styles.container}>
      <ShiftCard item={shift} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    minHeight: "100%",
    alignItems: "center",
  },
});
