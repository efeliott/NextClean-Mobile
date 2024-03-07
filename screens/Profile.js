import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollInnerContainer}
      >
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../assets/user.jpg")} // Replace with your actual image source
            style={styles.profileImage}
            resizeMode="center"
          />
        </View>
        {/* Add your profile content here */}
        <View style={styles.contentContainer}>
          <Text style={styles.profileTitle}>User Name</Text>
          <Text style={styles.profileDetails}>Email: user@example.com</Text>
          <Text style={styles.profileDetails}>Phone: +1234567890</Text>
          {/* Add more profile details as needed */}
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEditProfile()}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Move the button outsideP ScrollView */}
    </View>
  );
};

const handleEditProfile = () => {
  // Add your logic for handling the "Edit Profile" button press
  console.log("Edit Profile button pressed");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollInnerContainer: {
    paddingBottom: 30,
  },
  contentContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Make it a circle
  },
  profileTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  profileDetails: {
    fontSize: 16,
    fontWeight: "500",
    color: "#3F3F3F",
    marginBottom: 10,
  },
  buttonContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Profile;
