import React from "react";
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Shift } from "@entities/shift";
import { ShiftItem } from "./shiftItem";

type Props = {
  items: Shift[];
  isLoading?: boolean;
  onNavigation: (item: Shift) => void;
};

export const ShiftList: React.FC<Props> = ({
  onNavigation,
  items,
  isLoading,
}) => {
  if (isLoading)
    return <ActivityIndicator style={styles.loader} size="large" />;

  return (
    <FlatList
      style={styles.list}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onNavigation(item)}>
          <ShiftItem item={item} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  list: { padding: 16, backgroundColor: "white" },
});
