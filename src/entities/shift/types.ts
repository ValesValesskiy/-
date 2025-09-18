export type ShiftCoords = {
  longitude: number;
  latitude: number;
};

export type WorkType = {
  id: number;
  name: string;
  nameGt5: string;
  nameLt5: string;
  nameOne: string;
};

export type Shift = {
  /** ID */
  id: string;
  /** ссылка на логотип нанимателя */
  logo: string;
  /** координаты */
  coordinates: ShiftCoords;
  /** адрес проведения смены */
  address: string;
  /** имя компании нанимателя */
  companyName: string;
  /** дата начала смены */
  dateStartByCity: string;
  /** время начала */
  timeStartByCity: string;
  /** время окончания */
  timeEndByCity: string;
  /** сколько людей уже набрано (может быть больше требуемого) */
  currentWorkers: number;
  /** сколько людей требуется */
  planWorkers: number;
  /** наименование типа услуги */
  workTypes: Array<WorkType>;
  /** сумма выплаты за смену (в рублях) */
  priceWorker: number;
  bonusPriceWorker: number;
  /** количество отзывов о клиенте */
  customerFeedbacksCount: string;
  /** рейтинг нанимателя (максимум 5) */
  customerRating: number;
  isPromotionEnabled: boolean;
};

export type ShiftListResponse = { data: Shift[]; status: number };
