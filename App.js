import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

const App = () =>{
  const [number, onChangeNumber] = useState(null)
  
  const [count, setCont] = useState(0)
  const onPress= ()=>
  setCont(prevCont => prevCont + 1)

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
      <Text>Count: {count}</Text>
      </View>
      <TextInput 
      keyboardType='numeric' 
      style={styles.input}
      onChangeText={onChangeNumber}

      />
    
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
    >
      <Text>Pressione</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  button:{
    alignItems:'center',
    padding:10,
    backgroundColor:'#DDDDDD'
  },
  countContainer:{
    alignItems:'center',
    padding:10
  },
  input:{
    height:40,
    margin:12,
    borderWidth:2,
    padding :10
  }
});
export default App
