import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const tasks = [
  { id: 1, label: 'Vider les poubelles', completed: false },
  { id: 2, label: 'Laver le sol', completed: false },
  { id: 3, label: 'Nettoyer les carreaux', completed: false },
  // Ajoutez d'autres tâches ici
];

const TaskList = () => {
  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (id) => {
    setTaskList(
      taskList.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      {taskList.map((task) => (
        <View key={task.id} style={styles.task}>
          <Checkbox
            value={task.completed}
            onValueChange={() => toggleTask(task.id)}
          />
          <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
            {task.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default TaskList;
