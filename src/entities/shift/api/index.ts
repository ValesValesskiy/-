import { Shift, ShiftListResponse } from "../types";

const BASE_URL =
  "https://mobile.handswork.pro/api/shifts/map-list-unauthorized";

export const fetchShiftsByLocation = async (
  lat: number,
  lng: number
): Promise<Shift[]> => {
  const url = `${BASE_URL}?latitude=${lat}&longitude=${lng}`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("Network response was not ok");

  const data: ShiftListResponse = await res.json();

  return data.data;
};
