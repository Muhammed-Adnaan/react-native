import React from 'react';
import { StyleSheet, Text,TouchableOpacity} from 'react-native';
export default function TodoItem ({item, presshander}){

    return(
        <TouchableOpacity onPress={()=>presshander(item.key)}>
        <Text style = {styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#f9c2ff',
        padding: 16,
        marginTop: 16,
        borderRadius:10,
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'#bbb'
    }
});
