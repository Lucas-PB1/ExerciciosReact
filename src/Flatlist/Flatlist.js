import Pessoa from './Pessoa';
import { Component, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  [lista, setLista] = useState([
    { id: 1, nome: 'Lucas', idade: 20, email: 'example@example.com' },
    { id: 2, nome: 'João', idade: 18, email: 'example@example.com' },
    { id: 3, nome: 'Samuel', idade: 15, email: 'example@example.com' },
    { id: 4, nome: 'Edna', idade: 47, email: 'example@example.com' },
    { id: 5, nome: 'Luciano', idade: 48, email: 'example@example.com' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={(item) => item.id} data={lista} renderItem={({ item }) => <Pessoa data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


