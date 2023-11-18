import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Text>username & password</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate("ScreensOverview")}
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
