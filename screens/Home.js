import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import TaskList from "../components/TaskList";
import CardSessions from "../components/CardSessions";
import axios from "axios";

export default function Home() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
