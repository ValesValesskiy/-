import React from "react";
import { useWindowDimensions } from "react-native";
import WebView from "react-native-webview";

type Props = {
  latitude: number;
  longitude: number;
};

export const MarkerMap: React.FC<Props> = ({ latitude, longitude }) => {
  const { width } = useWindowDimensions();

  return (
    <WebView
      source={{
        html: `<iframe id="map" src="https://www.openstreetmap.org/export/embed.html?bbox=${
          longitude - 0.001
        },${latitude - 0.001},${longitude + 0.001},${
          latitude + 0.001
        }&layer=mapnik&marker=${latitude},${longitude}" style="border: 0; width: 100%; height: 500"></iframe>`,
      }}
      style={{ width }}
    />
  );
};
