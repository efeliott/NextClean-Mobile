import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TaskList from "../components/TaskList";
import axios from "axios";

export default function Checker({ route }) {
  const { sessionId } = route.params;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(
          `https://sought-gnu-27.hasura.app/api/rest/getTasksBySessionId/${sessionId}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-hasura-admin-secret":
                "jQt3E48FhV3uwqlnVlhMnkR9XoMoVbxiYLjRa1iuE8n0SOXstazx2Q7g0AtizYXR",
            },
          }
        );
        console.log(response.data);
        setTasks(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des sessions :", error);
      }
    };

    fetchSessions();
  }, [sessionId]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <TaskList tasks={tasks} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
