import React from "react";
import { View, StyleSheet } from "react-native";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <View style={styles.container}>
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
