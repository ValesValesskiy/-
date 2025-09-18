import { StatusBar, StyleSheet, Text, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainLayout } from "@layouts/mainLayout";
import { createStackNavigator } from "@react-navigation/stack";
import { ShiftListScreen } from "@screens/shiftListScreen";
import { ShiftDetailScreen } from "@screens/shiftDetailScreen";
import { userGeolocationSingletone } from "@store/userGeolocation";
import { observer } from "mobx-react-lite";
import { runInAction } from "mobx";
import { ScreenName } from "@shared/constants";
import { Switch } from "@shared/ui";

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={!isDarkMode ? "light-content" : "dark-content"} />
      <AppContent />
    </SafeAreaProvider>
  );
};

const Stack = createStackNavigator();

const _AppContent: React.FC = () => {
  const isFixLocation = userGeolocationSingletone.fixLocation;

  return (
    <MainLayout Stack={Stack}>
      <Stack.Screen
        name={ScreenName.ShiftList}
        component={ShiftListScreen}
        options={{
          title: "Смены",
          headerRight: () => (
            <>
              <Text style={styles.switchText}>Fix location</Text>
              <Switch
                onChange={() => {
                  runInAction(() => {
                    userGeolocationSingletone.fixLocation = !isFixLocation;
                  });
                }}
                value={isFixLocation}
              />
            </>
          ),
        }}
      />
      <Stack.Screen
        name={ScreenName.Detail}
        component={ShiftDetailScreen}
        options={({ route }) => ({ title: route.params.shift.companyName })}
      />
    </MainLayout>
  );
};

const AppContent = observer(_AppContent);

const styles = StyleSheet.create({
  switchText: { color: "white", paddingRight: 12 },
});

export default App;
