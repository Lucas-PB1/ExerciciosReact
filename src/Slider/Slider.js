import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { View, StyleSheet, Text } from 'react-native';

export default function Slider() {
  [slide, setSlide] = useState(0);

  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        onValueChange={(value) => setSlide(value)}
        value={slide}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});