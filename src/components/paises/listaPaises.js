import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import api from '../service/api.js';

export default function ListaPaises({ pais, atualizaLista }) {
  const [id, setId] = useState(null);
  const [novoNome, setNovoNome] = useState('');
  const [novaCapital, setNovaCapital] = useState('');
  const [editando, setEditando] = useState(false); // Estado para controlar se está editando

  useEffect(() => {
    setId(pais.id);
    setNovoNome(pais.nome);
    setNovaCapital(pais.capital);
  }, [pais]);

  function deletar() {
    if (!id) {
      console.error('ID do país não está definido.');
      return;
    }

    api.delete(`/pais/${id}`)
      .then(response => {
        Alert.alert('Sucesso', 'O país foi deletado com sucesso.');
        atualizaLista();
      })
      .catch(error => {
        console.error('Erro ao deletar', error);
        Alert.alert('Erro', 'Ocorreu um erro ao deletar o país.');
      });
  }

  function editar() {
    api.put(`/pais/${id}`, { nome: novoNome, capital: novaCapital })
      .then(response => {
        console.log(response.data);
        Alert.alert('Sucesso', 'O país foi atualizado com sucesso.');
        setEditando(false);
        atualizaLista();
      })
      .catch(error => {
        console.error('Erro ao editar', error);
        Alert.alert('Erro', 'Ocorreu um erro ao editar o país.');
      });
  }

  return (
    <View style={styles.container}>
      {editando ? (
        <View>
          <TextInput
            value={novoNome}
            onChangeText={setNovoNome}
            style={styles.input}
          />
          <TextInput
            value={novaCapital}
            onChangeText={setNovaCapital}
            style={styles.input}
          />
          
          <TouchableOpacity style={styles.botton} onPress={editar}>
            <Text>Salvar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onLongPress={deletar} onPress={() => setEditando(true)}>
          <Text style={styles.text}>País: {pais.nome}</Text>
          <Text style={styles.text}>Capital: {pais.capital}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    padding: 16,
  },
  text: {
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  botton:{
    backgroundColor: '#ff0000', 
    padding: 8,
    width: '20%', 
    alignItems: 'center', 
    borderRadius: 6
  }
};
