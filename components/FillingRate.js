import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const FillingRate = () => {
  const [fillRate, setFillRate] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Taux de remplissage : {fillRate}%</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setFillRate(Math.round(value))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FillingRate;
