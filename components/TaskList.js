import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";

const TaskList = ({ tasks }) => {
  console.log("Task", tasks);

  if (!tasks || !tasks.sessions || !tasks.sessions.length) {
    console.log("Tasks not defined or empty");
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const sessionTasks = tasks.sessions.flatMap((session) =>
    session.session_tasks.map((task) => task.task)
  );

  const [taskList, setTaskList] = useState(
    sessionTasks.map((task) => ({ ...task, isChecked: false }))
  );

  const toggleTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  console.log("Task List", taskList);

  // QUERY
  const sendUpdateRequest = async (id, isChecked) => {
    try {
      const response = await axios.post(
        `https://sought-gnu-27.hasura.app/api/rest/UpdateSessionTasksIsDone/${id}`,
        { isDone: isChecked ? 1 : 0 },
        {
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "jQt3E48FhV3uwqlnVlhMnkR9XoMoVbxiYLjRa1iuE8n0SOXstazx2Q7g0AtizYXR",
          },
        }
      );
      console.log("Update response:", response.data);
      // Si vous avez besoin de mettre à jour l'interface utilisateur après la mise à jour, vous pouvez le faire ici
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la tâche :", error);
    }
  };
  const handleSendUpdate = () => {
    taskList.forEach((task) => {
      sendUpdateRequest(task.id, task.isChecked);
    });
  };

  return (
    <View style={styles.container}>
      {taskList.map((task) => (
        <View key={task.id} style={styles.task}>
          <Checkbox
            style={styles.checkbox}
            value={task.isChecked}
            onValueChange={() => toggleTask(task.id)}
            color={task.isChecked ? "#4630EB" : undefined}
          />
          <Text>{task.name}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSendUpdate}>
        <Text>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },

  button: {
    padding: 20,
    backgroundColor: "green",
    borderRadius: 5,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default TaskList;
