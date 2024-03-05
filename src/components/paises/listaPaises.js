import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function paises({pais}) {


 return (
    <View style={styles.container}>
        <Text style={styles.text}>Pais: {pais.nome}</Text>
        <Text style={styles.text}>Capital: {pais.capital}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex1: 1,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    padding: 16,
  },
  text:{
    marginBottom: 6,
    fontSize: 16,
  }
})