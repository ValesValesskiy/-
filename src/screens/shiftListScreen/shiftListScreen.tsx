import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import { observer } from "mobx-react-lite";
import { shiftListSingletone } from "@store/shiftList";
import { ShiftList } from "@features/shiftList";
import { userGeolocationSingletone } from "@store/userGeolocation";
import { geolocationPermissionSingletone } from "@store/geolocationPermission";
import { runInAction } from "mobx";

const requestLocationAndFetch = async () => {
  await userGeolocationSingletone.fetch();
  runInAction(() => {
    const { lat, lng } = userGeolocationSingletone;

    if (lat && lng) {
      shiftListSingletone.fetch(lat, lng);
    }
  });
};

const ShiftListScreenComponent: React.FC = ({ navigation }) => {
  const granted = geolocationPermissionSingletone.granted;
  const { fixLocation } = userGeolocationSingletone;

  useEffect(() => {
    requestLocationAndFetch();
  }, [granted, fixLocation]);

  if (
    shiftListSingletone.isLoading ||
    userGeolocationSingletone.isLoading ||
    geolocationPermissionSingletone.isLoading
  )
    return <ActivityIndicator style={styles.center} size="large" />;

  if (shiftListSingletone.error)
    return (
      <View style={styles.center}>
        <Text>{shiftListSingletone.error}</Text>
        <Button title="Повторить" onPress={() => requestLocationAndFetch()} />
      </View>
    );

  if (!shiftListSingletone.shifts.length) {
    return (
      <View style={styles.center}>
        <Text>Здесь пока ничего нет</Text>
        <Button title="Повторить" onPress={() => requestLocationAndFetch()} />
      </View>
    );
  }

  return (
    <ShiftList
      items={shiftListSingletone.shifts}
      onNavigation={(item) => navigation.navigate("Detail", { shift: item })}
      isLoading={shiftListSingletone.isLoading}
    />
  );
};

export const ShiftListScreen = observer(ShiftListScreenComponent);

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
