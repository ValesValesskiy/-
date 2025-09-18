import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { Shift } from "@entities/shift";

type Props = {
  item: Shift;
  onOpenMap: (longitude: number, latitude: number) => void;
};

export const ShiftCard: React.FC<Props> = ({ item, onOpenMap }) => {
  const { latitude, longitude } = item.coordinates;

  return (
    <>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={styles.content}>
        <Text style={styles.padd}>
          <Text style={styles.title}>Адрес: </Text>
          {item.address}
        </Text>
        <Text style={styles.padd}>
          <Text style={styles.title}>Дата проведения работ: </Text>
          {item.dateStartByCity}
        </Text>
        <Text style={styles.padd}>
          <Text style={styles.title}>Время проведения работ: </Text>
          {item.timeStartByCity}-{item.timeEndByCity}
        </Text>
        <Text style={styles.padd}>
          <Text style={styles.title}>Набрано персонала: </Text>
          {item.currentWorkers}/{item.planWorkers}
        </Text>
        <Text style={styles.padd}>
          <Text style={styles.title}>Тип услуги: </Text>
          {item.workTypes.map(({ name }) => name).join(", ")}
        </Text>
        <Text style={styles.padd}>
          <Text style={styles.title}>Оплата: </Text>
          {item.priceWorker} ₽
        </Text>
        <Text style={styles.padd}>
          <Text style={styles.title}>Бонус: </Text>
          {item.bonusPriceWorker} ₽
        </Text>
        <Text style={styles.padd}>
          <Text style={styles.title}>Отзывы клиентов: </Text>
          {item.customerFeedbacksCount}
        </Text>
        <Text style={styles.last}>
          <Text style={styles.title}>Рейтинг: </Text>
          {item.customerRating ? item.customerRating + "/5" : "-"}
        </Text>
        <Button
          title="Открыть карты"
          onPress={() => onOpenMap(longitude, latitude)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  title: { fontWeight: "bold", fontSize: 14, paddingBottom: 8 },
  last: { paddingBottom: 16 },
  padd: { paddingBottom: 8 },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 16,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    boxShadow: "1px 1.5px 6px rgba(0, 0, 0, .25)",
  },
});
