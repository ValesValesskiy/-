import { ShiftCard } from "@features/shiftCard";
import React, { useCallback } from "react";
import { View, StyleSheet, Linking } from "react-native";
import { MarkerMap } from "@shared/ui";
import { StackScreenProps } from "@react-navigation/stack";
import { ScreenName } from "@shared/constants";
import { ScreenData } from "@shared/types";

export const ShiftDetailScreen: React.FC<
  StackScreenProps<ScreenData, ScreenName.Detail>
> = ({ route }) => {
  const { shift } = route.params;
  const { latitude, longitude } = shift.coordinates;
  const onOpenMap = useCallback(() => {
    const url = `geo:${latitude},${longitude}`;

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      <ShiftCard item={shift} onOpenMap={onOpenMap} />
      <View style={styles.mapWrapper}>
        <MarkerMap latitude={latitude} longitude={longitude} />
      </View>
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
  mapWrapper: { paddingTop: 16 },
});
