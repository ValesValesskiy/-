import React, { FC, PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenName } from "@shared/constants";

type Props = {
  Stack: ReturnType<typeof createStackNavigator>;
};

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  Stack,
}) => {
  const { top } = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenName.ShiftList}
        screenOptions={{
          headerShadowVisible: false,
          headerTitleStyle: { color: "white" },
          headerStyle: {
            borderBottomWidth: 1,
            height: 50 + top,
            backgroundColor: "#33F",
          },
          headerTintColor: "white",
        }}
      >
        {children}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
