import { observable, action, runInAction } from "mobx";
import Geolocation from "@react-native-community/geolocation";
import { geolocationPermissionSingletone } from "@store/geolocationPermission";

class UserGeolocationStore {
  @observable accessor lat: number | null = null;
  @observable accessor lng: number | null = null;
  @observable accessor isLoading = false;
  @observable accessor fixLocation = false;
  @observable accessor error: string | null = null;

  @action.bound
  async fetch() {
    this.isLoading = true;

    if (!geolocationPermissionSingletone.granted) {
      await geolocationPermissionSingletone.fetch();
    }

    return new Promise((res, rej) => {
      if (this.fixLocation) {
        this.lng = 30.319448;
        this.lat = 59.696461;

        res(null);
        this.isLoading = false;

        return;
      }

      Geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;

          runInAction(() => {
            this.lat = latitude;
            this.lng = longitude;

            res(null);
            this.isLoading = false;
          });
        },
        (err) => {
          runInAction(() => {
            this.error = `Не удалось получить геолокацию.\nОшибка: ${err.message}`;

            rej(err);
            this.isLoading = false;
          });
        },
        { enableHighAccuracy: true, timeout: 3000, maximumAge: 1000 }
      );
    });
  }
}

export const userGeolocationSingletone = new UserGeolocationStore();
