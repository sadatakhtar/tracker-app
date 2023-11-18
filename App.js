import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./screens/Dashboard";
import RecentEntrties from "./screens/RecentEntrties";
import ManageEntries from "./screens/ManageEntries";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ScreensOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTab.Screen
        name="RecentScreen"
        component={RecentEntrties}
        options={{
          title: "Recent Entries",
        }}
      />
      <BottomTab.Screen
        name="ManageScreen"
        component={ManageEntries}
        options={{
          title: "Manage Entries",
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ScreensOverview"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="DashboardScreen" component={Dashboard} />
          <Stack.Screen name="ScreensOverview" component={ScreensOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
