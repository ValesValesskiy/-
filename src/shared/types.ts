import { Shift } from "@entities/shift";
import { ScreenName } from "./constants";

export type ScreenData = {
  [ScreenName.Detail]: {
    shift: Shift;
  };
};
