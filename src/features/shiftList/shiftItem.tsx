import { Shift } from "@entities/shift";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export type Props = {
  item: Shift;
};

export const ShiftItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.main}>
        <Image source={{ uri: item.logo }} style={styles.logo} />
        <View style={styles.text}>
          <Text style={styles.string}>
            <Text style={styles.title}>Организация: </Text>
          </Text>
          <Text style={styles.string}>
            <Text numberOfLines={1}>{item.companyName}</Text>
          </Text>
          <Text style={styles.string}>
            <Text style={styles.title}>Рабочие места: </Text>
            {item.currentWorkers}/{item.planWorkers}
          </Text>
          <Text style={styles.string}>
            <Text style={styles.title}>Дата проведения работ: </Text>
          </Text>
          <Text style={styles.string}>{item.dateStartByCity}</Text>
        </View>
      </View>
      <Text>
        <Text style={styles.title}>Характер работ: </Text>
        {item.workTypes.map(({ name }) => name).join(", ")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    width: "100%",
    height: 124,
    marginBottom: 4,
    padding: 0,
  },
  item: {
    overflow: "hidden",
    height: 200,
    borderRadius: 12,
    borderColor: "#888",
    padding: 12,
    marginBottom: 24,
    boxShadow: "1px 1.5px 6px rgba(0, 0, 0, .25)",
  },
  text: { flex: 1 },
  title: { fontWeight: "bold", fontSize: 14 },
  string: { paddingBottom: 1, fontSize: 14 },
  logo: {
    height: 100,
    marginBottom: 12,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
  },
});
