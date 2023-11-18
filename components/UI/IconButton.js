import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <AntDesign name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
