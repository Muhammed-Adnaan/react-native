import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import Addtodo from './components/addtodo';

export default function App() {
  const [todos ,setTodos] = useState([
    {text: 'buy a coffe', key:'1'},
    {text: 'learn react native', key:'2'},
    {text: 'play on the swith', key: '3'},
    {text: 'read daily ', key:'4'}
  ]);
  const presshander = (key)=> {
    setTodos(prevTodos=>{
      return prevTodos.filter(todos => todos.key !== key )
    })
  }
  const submitHandler = (text) => {
    setTodos ((prevTodos) => {
      return [
        {text :text, key:Math.random().toString()},
        ...prevTodos
      ];
    })
  }
  return (
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
