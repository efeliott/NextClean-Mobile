import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Modal, Button, Linking } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native"; // Import de useNavigation
import axios from "axios";

const QRCodeScannerScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const cameraRef = useRef(null);
  const navigation = useNavigation(); // Utilisation de useNavigation

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true);
      setQrData(data);
      console.log("QR Code scanné:", data); // Ajout du console.log
      setModalVisible(true);

      // Allow scanning again after a short delay
      setTimeout(() => {
        setScanned(false);
      }, 6000); // Adjust the delay as needed

      // Redirection vers la page "Session" après le scan
      navigation.navigate("Session", { qrData: data }); // Passer les données QR
    }
  };

  const handleLinkPress = () => {
    console.log("Ouverture de l'URL:", qrData); // Ajout du console.log
    Linking.openURL(qrData);
    setModalVisible(false);
  };

  if (hasCameraPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ref={cameraRef}
        autoFocus={Camera.Constants.AutoFocus.on} // Enable autofocus
      >
        <View style={styles.overlay}>
          <View style={styles.scanBorder} />
        </View>
      </Camera>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.linkText} onPress={handleLinkPress}>
            {qrData}
          </Text>
          <Button title="Fermer" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default QRCodeScannerScreen;
