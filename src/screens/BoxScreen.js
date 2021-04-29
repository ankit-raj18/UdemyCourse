import React from 'react';
import { Text, View , StyleSheet } from 'react-native';

function BoxScreen(props) {
    return (
   
        
        
        <View >
           <View>
            <Text style= {styles.appStyle}>APP !</Text>

           </View>

           <View style ={styles.viewStyle}>
            <View style={styles.firstBox} />
            <View style={styles.secondBox} />
            <View style={styles.thirdBox} />
               
           </View>

            
        </View>

    
        
    );
}

const styles = StyleSheet.create({
    viewStyle : {
            borderWidth : 1,
            borderColor :'black',
            height : 100,
            flexDirection : 'row',
            justifyContent : 'space-between',
            
    },

    appStyle : {
        borderWidth : 1,
            borderColor :'black',
           fontSize: 30,
           height : 50,
           flexDirection : 'column',
          alignItems : 'center',
        
          
        },
    
    
    firstBox : {
            height: 50,
            width: 50,
            backgroundColor : 'red',
    },

    secondBox : {
        height: 50,
        width: 50,
        backgroundColor : 'green',
        marginTop: 50,

    },

    thirdBox : {
        height: 50,
        width: 50,
        backgroundColor : 'grey',


    },

   

})

export default BoxScreen;