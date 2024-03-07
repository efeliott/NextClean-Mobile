import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CardSessions = ({ tasks, navigateToChecker }) => {
  // Vérifiez si tasks et tasks.campuses sont définis
  if (!tasks || !tasks.campuses) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Obtenez les sessions de tous les campuses
  const sessions = tasks.campuses.reduce((acc, campus) => {
    return [...acc, ...campus.sessions];
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() retourne un mois indexé à 0
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  // Affichez les sessions
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sessions </Text>
      {sessions.map((session) => (
        <TouchableOpacity
          key={session.id}
          style={[
            styles.task,
            session.completed ? styles.taskCompleted : styles.taskPending,
          ]}
          onPress={() => navigateToChecker(session.id)}
        >
          <Text style={styles.taskLabel}>Session {session.id}</Text>
          <Text style={styles.dateLabel}>
            Du {formatDate(session.start_time)}
          </Text>
          <Text style={styles.dateLabel}>
            au {formatDate(session.end_time)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  task: {
    margin: 5,
    flexDirection: "collumn",
    alignItems: "left",
    justifyContent: "center",
    marginBottom: 10,
    width: "90%",
    height: 60,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  taskCompleted: {
    backgroundColor: "#d1d1d1",
  },
  taskLabel: {
    textDecorationLine: "none",
    color: "#333",
    fontSize: 16,
  },
  dateLabel: {
    textDecorationLine: "none",
    color: "#333",
    fontSize: 12,
  },
});

export default CardSessions;
