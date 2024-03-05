import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Alert } from 'react-native';
import Styles from './style/';
import ListaPaises from '../paises/listaPaises.js';
import api from '../service/api.js';

export default function Form() {

    const [paises, setPaises] = useState([]);
    const [nomePais, setNomePais] = useState('');
    const [capitalPais, setCapitalPais] = useState('');


    // Carrega a lista de paises no banco
    useEffect(() =>{
        api.get('/pais')
            .then((response) => {
                setPaises(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                console.error('Error adding country:', error);
            });
    }

    return (
        <View style={Styles.container}> 
            <View style={Styles.containerTitle}>
                <Text style={Styles.title}>API- Paises</Text>
            </View>
            <View style={Styles.form}>
                <View style={Styles.contentInput}>
                    <Text style={Styles.text}>Pais:</Text>
                    <TextInput 
                        style={Styles.input}
                        value={nomePais}
                        onChangeText={text => setNomePais(text)}
                    />
                </View>
                <View style={Styles.contentInput}>
                    <Text style={Styles.text}>Capital:</Text>
                    <TextInput
                        style={Styles.input}
                        value={capitalPais}
                        onChangeText={text => setCapitalPais(text)}
                    />
                </View>
                <TouchableOpacity style={Styles.button} onPress={adicionar} >
                    <Text style={Styles.buttonText}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.list}>
                <Text style={Styles.titleScroll}>Lista de Paises</Text>
                <FlatList
                    data={paises}
                    renderItem={({ item }) => <ListaPaises pais={item} />}
                    keyExtractor={item => item.id.toString()} // Key deve ser uma string
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
