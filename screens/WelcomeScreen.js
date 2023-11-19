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
      <Text>Sign in</Text>
      <TextInput placeholder="Username" onChangeText={handleName} />
      <TextInput placeholder="Password" onChangeText={handleName} />
      <Button
        title="Sign In"
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
