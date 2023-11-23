import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  getIsDarkMode,
  setIsDarkMode,
} from "../feature/userJourney/UserSlice";
import Input from "../components/UI/Input";
import { GlobalStyles } from "../constants/styles";

const WelcomeScreen = ({ navigation }) => {
  const [username, setUserName] = useState("");
  //const [isDarkMode, setIsDarkMode] = useState(false);

  const isDarkModeRedux = useSelector(getIsDarkMode);

  const dispatch = useDispatch();

  function handleName(text) {
    setUserName(text);
  }

  function handleBtn() {
    dispatch(setName(username));
    navigation.navigate("ScreensOverview");
  }

  function toggleHandler() {
    dispatch(setIsDarkMode(!isDarkModeRedux));
  }

  const styles = StyleSheet.create({
    container: {
      padding: 24,
      backgroundColor: isDarkModeRedux ? GlobalStyles.colors.primary800 : "white",
    },
  });
  return (
    <View style={styles.container}>
      <Input
        label="Username"
        textInputConfig={{
          keyboardType: "default",
          onChangeText: handleName,
        }}
      />
      <Input
        label="Password"
        textInputConfig={{
          keyboardType: "default",
          onChangeText: () => {},
        }}
      />
      <Button title="Sign In" onPress={handleBtn} />
      <Switch value={isDarkModeRedux} onValueChange={toggleHandler} />
    </View>
  );
};

export default WelcomeScreen;
