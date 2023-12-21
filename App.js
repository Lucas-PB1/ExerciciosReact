import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Exercicios nas pasta SRC</Text>
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
