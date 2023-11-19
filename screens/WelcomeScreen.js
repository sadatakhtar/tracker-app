import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../feature/userJourney/UserSlice";
import Input from "../components/UI/Input";


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
      <Input label="Username" textInputConfig={{
        keyboardType: 'default',
        onChangeText: handleName
      }}/>
      <Input label="Password" textInputConfig={{
        keyboardType: 'default',
        onChangeText: () => {}
      }}/>
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
