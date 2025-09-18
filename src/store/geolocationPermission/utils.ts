import { PermissionsAndroid } from "react-native";

export const requestGeolocationPermission = async () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: "Geolocation Permission",
      message: "Can we access your location?",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }
  );
};
