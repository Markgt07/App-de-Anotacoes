import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


  
  
  export default function App() {

    const  [estado,setEstado] = useState('leitura');
    const  [anotacao,setAnotacao] = useState('Minha Anotação');


    return (
      <View style={{marginTop:24}}>
        <Text>{estado}</Text>
        
      </View>
    );
  }


