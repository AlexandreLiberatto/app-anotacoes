import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('Minha anotação');


  if(estado == 'leitura') {
  return (

    <View style={{flex:1}}>
      {/* <StatusBar style='light' /> */}
      <View style={styles.header}><Text style={{textAlign:'center', color:'white',fontSize:20}}>Aplicativo Anotações</Text></View>

      <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>

      <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
      
    </View>
  );
} else if(estado == 'atualizando') {

  return(
    <View style={{flex:1}}>
    {/* <StatusBar style='light' /> */}
    <View style={styles.header}><Text style={{textAlign:'center', color:'white',fontSize:20}}>Aplicativo Anotações</Text></View>


    <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.btnSalvar}><Text style={{textAlign:'center',color:'white',fontSize:16}}>Salvar</Text></TouchableOpacity>
    
    </View>
  );
}
}

const styles = StyleSheet.create({
  
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#5d6d6c',
  },

  anotacao: {
    fontSize: 16
  },

  btnAnotacao: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: '#00f801',
    borderRadius: 25,
  },

  btnAnotacaoTexto: {
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: 3,
    fontSize: 30
  },

  btnSalvar: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00f801',
    borderRadius: 25,
  }

});
