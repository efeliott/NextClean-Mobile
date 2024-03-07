import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import TaskList from "../components/TaskList";
import CardSessions from "../components/CardSessions";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import de useNavigation

export default function Session() {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation(); // Utilisation de useNavigation

  useEffect(() => {
    // Fonction pour récupérer les sessions depuis l'API
    const fetchSessions = async () => {
      try {
        // Remplacez 'YOUR_ID' par l'identifiant du campus requis
        const response = await axios.get(
          `https://sought-gnu-27.hasura.app/api/rest/getSessionsByCampusId/1`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-hasura-admin-secret":
                "jQt3E48FhV3uwqlnVlhMnkR9XoMoVbxiYLjRa1iuE8n0SOXstazx2Q7g0AtizYXR",
            },
          }
        );
        // Mettre à jour l'état avec les données de la réponse
        setTasks(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des sessions :", error);
      }
    };

    // Appeler la fonction pour récupérer les sessions
    fetchSessions();
  }, []); // Assure que cette effectue est exécutée seulement une fois au montage

  const navigateToChecker = (sessionId) => {
    navigation.navigate("Checker", { sessionId: sessionId });
  };

  return (
    <View style={styles.container}>
      <CardSessions tasks={tasks} navigateToChecker={navigateToChecker} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
