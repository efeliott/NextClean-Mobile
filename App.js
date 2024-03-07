import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Scan from "./screens/Scan";
import Profile from "./screens/Profile";
import Session from "./screens/Session"; // Importez votre composant Session
import Checker from "./screens/Checker"; // Importez votre composant Session

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Scan"
            component={Scan}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="scan" size={size} color={color} />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          ></Tab.Screen>
          {/* Ajoutez la route pour Session */}
          <Tab.Screen name="Session" component={Session}></Tab.Screen>
          <Tab.Screen name="Checker" component={Checker}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
