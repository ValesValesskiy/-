import { observable, action, runInAction } from "mobx";
import { fetchShiftsByLocation } from "@entities/shift";
import { Shift } from "@entities/shift";

export class ShiftsListStore {
  @observable accessor shifts: Shift[] = [];
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;

  @action.bound
  async fetch(lat: number, lng: number) {
    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });
    try {
      const data = await fetchShiftsByLocation(lat, lng);
      runInAction(() => {
        this.shifts = data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = "Что-то пошло не так";
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export const shiftListSingletone = new ShiftsListStore();
