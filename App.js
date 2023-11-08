import { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import Addtodo from './components/addtodo';

export default function App() {
  const [todos ,setTodos] = useState([
    {text: 'Make Your Todo list now (touch to remove) ', key:'1'},
  ]);
  const presshander = (key)=> {
    setTodos(prevTodos=>{
      return prevTodos.filter(todos => todos.key !== key )
    })
  }
  const submitHandler = (text) => {
    
    if (text.length > 3){
      setTodos ((prevTodos) => {
        return [
          {text :text, key:Math.random().toString()},
          ...prevTodos
        ];
      })
    }
    else{
      Alert.alert('OOPS!','Please enter a valid todo',
      [{text: 'Understood', onPress: () => console.log ('alert closed')}
    ]);
      return;
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
          <Addtodo submitHandler = {submitHandler}/>
          <View style = {styles.list}>
            <FlatList
            data = {todos} 
            renderItem={({ item }) => (
              <TodoItem item ={item} presshander = {presshander} />
            ) }/>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
});
