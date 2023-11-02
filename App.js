import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const[name, setname] = useState('adnaan')
  const clickhander = () =>{
    setname('afnaan');
    setperson({name:'tamim' , age:'30'});
  }
  const[person, setperson] = useState({name:'akram', age:'40'});
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
      <Text style = {styles.boldtext}>Hello {name}!!</Text>
        <Text>his name is {person.name} and his age is {person.age}</Text>
      </View>
      <View style ={styles.body}>
        <Text style = {styles.boldtext}>Enter the age:</Text>
        <TextInput style = {styles.input}
        placeholder="Enter text here" />
      </View>
      <View style= {styles.btncontainer}>
        <Button title='submit' onPress={clickhander}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btncontainer:{

  },
  header:{
    backgroundColor: 'pink',
    padding: 20,
  },
  boldtext:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'red',
    padding: 20,
  },
  input:{
    borderWidth: 3,
    borderColor:'gray',
    padding:20,
    margin:10,

  }
});
