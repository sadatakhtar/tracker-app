import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../feature/userJourney/UserSlice";

const WelcomeScreen = ({ navigation }) => {
  const [username, setUserName] = useState("");

  const dispatch = useDispatch();

  function handleName(text) {
    setUserName(text);
  }

  function handleBtn(){
    dispatch(setName(username))
    navigation.navigate("ScreensOverview")
  }
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Text>username & password</Text>
      <TextInput placeholder="Name" onChangeText={handleName} />
      <Button
        title="Next"
        onPress={handleBtn}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
