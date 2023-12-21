import { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

export default function Switch() {
  const [switcher, setswitcher] = useState(0);

  return (
    <View style={styles.container}>
      <Switch value={switcher} onValueChange={(value) => setswitcher(value)} />
      <Text>{switcher ? 'Ativo' : 'Inativo'}</Text>
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
