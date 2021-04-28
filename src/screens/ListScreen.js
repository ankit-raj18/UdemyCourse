import React from 'react';
import { View, Text, StyleSheet , FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
            {name: "Ankit" , age: 10},
            {name: "AnkitRaj", age: 14},
            {name: "AnkitRaja", age: 15},
            {name: "AnkitJuhi", age: 16},
            {name: "AnkitJuhiaa", age: 17},
            {name: "AnkitJuhia", age: 18},
            {name: "AnkitJuhiiiiii", age: 19},
            {name: "AnkitJuhiiiii", age: 20},
            {name: "AnkitJuhiiii", age: 13},
            {name: "AnkitJuhiii", age: 12},
            {name: "AnkitJuhii", age: 11},



    ]

    return (
        <FlatList 
        
        keyExtractor = { friend=> friend.name }
            data={friends}  
            renderItem = { ({item}) => {

            return (
            <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            

            );

            }  }  />
    );
}

const styles = StyleSheet.create({
    textStyle:{
       
      marginVertical: 50,

    }
    
})

export default ListScreen;