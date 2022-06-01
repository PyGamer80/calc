import React, {useState} from "react"
import {StatusBar, TouchableHighlight, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native"
import Estilos from './componentes/estilos/estilos.js'

export default function App(){

  const [valor,setValor]=useState('KVA')
  const [valor1,setValor1]=useState('TENSÂO')
  const [resultado,setResultado]=useState('Resultado')

  const soma=()=>{
    setResultado((parseInt(valor) * 1000)/ (1.73 * parseInt(valor1)))
  }

  return(
    <SafeAreaView style={Estilos.conteiner}>

      <StatusBar 
      barStyle="dark-content" 
      hidden = {false}
      backgroundColor='#fff'
      translucent = {false}
      networkActivityIndicatorVisible = {true}
      />

      <View style={Estilos.cabeçalho}>
      <Text style={Estilos.estilotexto}>Calculadora KVA => A</Text>
      </View>
      <View style={Estilos.num1}>
      <TextInput
      style={Estilos.display}
      value={String(valor)}
      onChangeText={(texto)=>{setValor(texto)}}
      keyboardType='numeric'
      >
      </TextInput>
      </View>
      <View style={Estilos.num2}>
      <TextInput
      style={Estilos.display}
      value={String(valor1)}
      onChangeText={(texto)=>{setValor1(texto)}}
      keyboardType='numeric'
      >
      </TextInput>
      </View>
      <View style={Estilos.resultado}>
      <TextInput
      style={Estilos.display}
      value={String(resultado)}
      onChangeText={(texto)=>{setResultado(texto)}}
      keyboardType='numeric'
      >
      </TextInput>
      </View>
      <View style={Estilos.somar}>
      <TouchableHighlight
      style={Estilos.btn}
      onPress={()=>soma()}
      >
        <Text style={Estilos.txtbtn}>Somar</Text></TouchableHighlight>
      </View>
      <View style={Estilos.rodape}>

      </View>
    </SafeAreaView>
  )}