import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import ListaPaises from '../paises/listaPaises.js';
import api from '../service/api.js';
import styles from './style/index.js'

export default function Form() {
  const [paises, setPaises] = useState([]);
  const [nomePais, setNomePais] = useState('');
  const [capitalPais, setCapitalPais] = useState('');

  useEffect(() =>{
    atualizaLista();
  }, []);

  function atualizaLista(){
    api.get('/pais')
      .then((response) => {
        setPaises(response.data);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
      });
  }

  function adicionar(){
    const novoPais = {
      nome: nomePais,
      capital: capitalPais
    };

    api.post('/pais', novoPais)
      .then((response) => {
        setPaises([...paises, response.data]);
        setNomePais('');
        setCapitalPais('');
      })
      .catch((error) => {
        console.error('Erro ao adicionar:', error);
      }).finally(()=>{
        Keyboard.dismiss();
      })
  }

  return (
    <View style={styles.container}> 
      <View style={styles.containerTitle}>
        <Text style={styles.title}>API- Paises</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.contentInput}>
          <Text style={styles.text}>País:</Text>
          <TextInput 
            style={styles.input}
            value={nomePais}
            onChangeText={text => setNomePais(text)}
          />
        </View>
        <View style={styles.contentInput}>
          <Text style={styles.text}>Capital:</Text>
          <TextInput
            style={styles.input}
            value={capitalPais}
            onChangeText={text => setCapitalPais(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={adicionar} >
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <Text style={styles.titleScroll}>Lista de Países</Text>
        <FlatList
          data={paises}
          renderItem={({ item }) => <ListaPaises pais={item} atualizaLista={atualizaLista} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
