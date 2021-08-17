import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity,TextInput, AsyncStorage } from 'react-native';


  
  
  export default function App() {

    const  [estado,setEstado] = useState('leitura');
    const  [anotacao,setAnotacao] = useState('');

    useEffect (()=>{
      //quando inicializar o app queremos que leia a key anotacao.
      (async()=>{
        try{
            const anotacaoleitura = await AsyncStorage.getItem('anotacao');
            setAnotacao(anotacaoleitura);

       }catch(error){

       }
      })();
    },[])

    setData = async()=>{
      try{
      await AsyncStorage.setitem('anotacao',anotacao);
    }catch(error){

    }
    alert('sua anotação foi salva')
    }

    function atualizartexto(){
      setEstado('leitura');
      setData();
    }
    if(estado == 'leitura'){
    return (
  
      <View>

        <StatusBar hidden/>

        <View style={styles.header}>  
          <Text style={{textAlign:'center',color:'white',fontSize:18}}> 
            Aplicativo Anotação
          </Text> 
        </View>
        {
          (anotacao !='')?
        <View style={{padding:20}}> 
          <Text style={styles.anotacao}>
            {anotacao}
          </Text>
        </View>
        :
        <View style={{padding:20}}><Text style={{opacity:0.3}}>nenhuma anotação encontrada :</Text></View>
        }
        <TouchableOpacity onPress={()=> setEstado('atualizando')} style={styles.btnAnotacao}>
          {
          (anotacao == "")?
          <Text style={styles.btnAnotacaoTexto}>+</Text>
          :
          <Text style={{fontSize:12,color:'white',textAlign:'center',marginTop:16}}>editar</Text>
          }
        </TouchableOpacity>
        
      </View>

    );
  }else if(estado == 'atualizando'){
    return(
    <View>

        <StatusBar hidden/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Aplicativo Anotação</Text></View>

        <TextInput autoFocus={true} onChangeText={(text)=>setAnotacao(text)} style={{padding:20,height:300,textAlignVertical:'top'}} multiline={true} numberOfLines={5} value={anotacao}></TextInput>

        <TouchableOpacity onPress={()=> atualizartexto()} style={styles.btnAnotacaoSalvar}><Text style={{textAlign:"center",color:'white'}}>salvar</Text></TouchableOpacity>
        
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
      bottom: '-100%',
      width: 50,
      paddingTop:10,
      paddingBottom:20,
      backgroundColor:'#069',
      borderRadius:25

    },
    

});
//primeira fase concluida

