import React from 'react';
import { StyleSheet,View, Text,TouchableOpacity} from 'react-native';
import  { MaterialIcons } from '@expo/vector-icons';
export default function TodoItem ({item, presshander}){

    return(
        <TouchableOpacity onPress={()=>presshander(item.key)}>
            <View style = {styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style = {styles.itemText}>{item.text}</Text>
            </View>   
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
        borderColor:'#bbb',
        flexDirection:'row',
    },
    itemText: {
        marginLeft:10,
    }
});
