import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet, Text, } from 'react-native';

export default function Picker() {
  const [pizza, setPizza] = useState(0);
  const [pizzas, setPizzas] = useState([
    { key: 1, name: 'Calabresa', valor: 59.90 },
    { key: 1, name: 'Frango', valor: 49.90 },
    { key: 1, name: 'Chocolate', valor: 39.90 }
  ]);

  let itens = pizzas.map((value, key) => <Picker.Item key={key} value={key} label={value.name + ' - R$' + value.valor.toFixed(2)} />)

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker selectedValue={pizza} onValueChange={(itemValue, itemIndex) => setPizza(itemValue)}>
        {itens}
      </Picker>

      <Text style={styles.pizza}>Você escolheu: Pizza de {pizzas[pizza].name}</Text>
      <Text style={styles.pizza}>R$: {pizzas[pizza].valor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  logo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pizza: {
    marginTop: 12,
    fontSize: 18,
    textAlign: 'center'
  }
});
