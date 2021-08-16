import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';


  
  
  export default function App() {

    const  [estado,setEstado] = useState('leitura');
    const  [anotacao,setAnotacao] = useState('Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou-o para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Ele foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum.');

    if(estado == 'leitura'){
    return (
  
      <View>

        <StatusBar style='light'/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Aplicativo Anotação</Text></View>

        <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>

        <TouchableOpacity onPress={()=> setEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
        
      </View>

    );
  }else if(estado == 'atualizando'){
    return(
    <View>

        <StatusBar style='light'/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Aplicativo Anotação</Text></View>

        

        <TouchableOpacity onPress={()=> setEstado('leitura')} style={styles.btnAnotacaoSalvar}><Text style={{textAlign:"center",color:'white'}}>salvar</Text></TouchableOpacity>
        
      </View>
      );
  }
}

const styles = StyleSheet.create({
    header:{
      width:'100%',
      padding:15,
      backgroundColor:'#069'
    },
    anotacao:{
      fontSize:13
    },
    btnAnotacao:{
      position:'absolute',
      right:20,
      bottom:-450,
      width: 50,
      height: 50,
      backgroundColor:'#069',
      borderRadius:25

    },
    btnAnotacaoTexto:{
      color:'white',
      position:'relative',
      textAlign:'center',
      top:3,
      fontSize:30
    },
    btnAnotacaoSalvar:{
      position:'absolute',
      right:20,
      bottom:-680,
      width: 50,
      paddingTop:10,
      paddingBottom:20,
      backgroundColor:'#069',
      borderRadius:25

    },
    

});

