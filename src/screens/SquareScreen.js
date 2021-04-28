import React , {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "./../components/ColorCounter";

const COLOR_CHANGE = 15;

function SquareScreen(props) {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

const setColor=(color, change) => {

        switch(color){
            case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red+change);
            return;
            case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green+change);
            return;
            case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change);
            return;
            default:
            return;

        }
};



    return (
        <View>
            <ColorCounter 
            onIncrease = {()=> setColor('red' , COLOR_CHANGE)}
            onDecrease = {()=> setColor('red', -1* COLOR_CHANGE)}
            color="RED" />
            <ColorCounter 
             onIncrease = {()=> setColor('blue', COLOR_CHANGE)}
             onDecrease = {()=> setColor('blue', -1*COLOR_CHANGE)} 
             color="BLUE" />
            <ColorCounter
             onIncrease = {()=> setColor('green' , COLOR_CHANGE)}
             onDecrease = {()=> setColor('green', -1*COLOR_CHANGE)}
             color="GREEN" />

             <View style={{ height: 100, width:  100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
        
    );
}

const styles = StyleSheet.create({
    
})
export default SquareScreen;