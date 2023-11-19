import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getName } from "../feature/userJourney/UserSlice";

const Dashboard = ({ navigation }) => {
  const userNameRedux = useSelector(getName);
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Welcome to the dashboard {userNameRedux}</Text> 
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
