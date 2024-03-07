import React from "react";
import { View, StyleSheet } from "react-native";
import FillingRate from "../components/FillingRate";
import TaskList from "../components/TaskList";

export default function Scan() {
  return (
    <View style={styles.container}>
      <FillingRate />
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
