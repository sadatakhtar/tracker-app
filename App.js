import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Dashboard from "./screens/Dashboard";
import RecentEntrties from "./screens/WelcomeScreen";
import ManageEntries from "./screens/ManageEntries";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ScreensOverview({ navigation }) {
  return (
    <BottomTab.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="plus"
            color={tintColor}
            size={24}
            onPress={() => navigation.navigate("ManageScreen")}
          />
        ),
      }}
    >
      <BottomTab.Screen
        name="DashboardScreen"
        component={Dashboard}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ManageScreen"
        component={ManageEntries}
        options={{
          title: "Manage Entries",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" color={color} size={size} />
          ),
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
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            name="WelcomeScreen"
            component={RecentEntrties}
            options={{
              title: "Welcome",
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="ScreensOverview"
            component={ScreensOverview}
            options={{
              headerShown: false,
            }}
          />
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
