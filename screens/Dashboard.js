import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
