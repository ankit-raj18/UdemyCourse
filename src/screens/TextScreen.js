import React ,{useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function TextScreen(props) {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter your Password: </Text>
           <TextInput style={styles.input}
           value = {password}
           onChangeText = { (newPassword) =>
            setPassword(newPassword)
            }  
            />
            {password.length < 5
             ? <Text>Password must more than 4 characters</Text> : null}
           
      </View>
        
    );
}
const styles = StyleSheet.create({
    input :{
        margin : 15,
        borderColor : 'black',
        borderWidth : 1,

    }
    
})

export default TextScreen;