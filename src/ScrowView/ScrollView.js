import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ScrollView() {
  return (
    <View style={styles.container}>
      {/* Para bloquear rolagem */}
      {/* scrollEnabled={false} */}

      {/* Indicação vertical e horizontal */}
      {/* showsVerticalScrollIndicator={false} */}
      {/* showsHorizontalScrollIndicator={false} */}

      {/* Scroll Horizontal */}
      {/*  horizontal={true} */}

      <ScrollView  >
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    // width: 150
  },
  box2: {
    backgroundColor: 'yellow',
    height: 250,
    // width: 150
  },
  box3: {
    backgroundColor: 'blue',
    height: 250,
    // width: 150
  },
  box4: {
    backgroundColor: 'green',
    height: 250,
    // width: 150
  },
});
