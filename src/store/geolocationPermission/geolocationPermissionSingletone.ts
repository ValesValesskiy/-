import { observable, action, runInAction } from "mobx";
import { PermissionsAndroid } from "react-native";
import { requestGeolocationPermission } from "./utils";

class GeolocationPermissionStore {
  @observable accessor granted: boolean = false;
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;

  @action.bound
  async fetch() {
    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      const granted = await requestGeolocationPermission();

      runInAction(() => {
        this.granted = granted === PermissionsAndroid.RESULTS.GRANTED;
      });
    } catch (err) {
      console.warn(err);
      runInAction(() => {
        this.granted = false;
        this.error = "Что-то пошло не так";
      });
    }

    this.isLoading = false;
  }
}

export const geolocationPermissionSingletone = new GeolocationPermissionStore();
