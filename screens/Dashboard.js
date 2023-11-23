import { StyleSheet, Text, View, Button, Switch } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getName,
  getIsDarkMode,
  setIsDarkMode,
} from "../feature/userJourney/UserSlice";
import { GlobalStyles } from "../constants/styles";

const Dashboard = ({ navigation }) => {
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const userNameRedux = useSelector(getName);
  const isDarkModeRedux = useSelector(getIsDarkMode);

  const dispatch = useDispatch();

  function toggleHandler() {
    dispatch(setIsDarkMode(!isDarkModeRedux));
  }
  const styles = StyleSheet.create({
    container: {
      padding: 24,
      backgroundColor: isDarkModeRedux
        ? GlobalStyles.colors.primary800
        : "white",
    },
    text: {
      color: isDarkModeRedux ? "white" : "black",
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <Text style={styles.text}>Welcome to the dashboard {userNameRedux}</Text>
      <Switch value={isDarkModeRedux} onValueChange={toggleHandler} />
    </View>
  );
};

export default Dashboard;
