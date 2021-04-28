import React , {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


function CounterScreen(props) {
   const [Counter, setCounter] = useState(0);
    return (
        <View>
            <Button title= 'Increase' onPress={()=>{
                setCounter(Counter+1);
            }} />
            <Button title= 'Decrease' onPress={()=>{
                 setCounter(Counter-1);;
            }} />
            <Text>Current Count: {Counter}</Text>
            

        </View>
    );
}
const styles = StyleSheet.create({
    
})

export default CounterScreen;