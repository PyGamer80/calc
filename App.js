import {Stylesheets, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import  Estilos  from './componentes/estilos/styles.js'

const App = () =>{
  const [number, onChangeNumber] = useState(null)
  
  const [count, setCont] = useState(0)
  const onPress= ()=>
  setCont(prevCont => prevCont + 1)

  return (
    <View style={Estilos.container}>
      <View style={Estilos.countContainer}>
      <Text>Count: {count}</Text>
      </View>
      <TextInput 
      keyboardType='numeric' 
      style={Estilos.input}
      onChangeText={onChangeNumber}

      />
    
    <TouchableOpacity 
      style={Estilos.button}
      onPress={onPress}
    >
      <Text>Pressione</Text>
    </TouchableOpacity>
    </View>
  )
}

export default App
