import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function ImageDetail(props) {
   
    return (
      
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>{props.score}</Text>
            
        </View>
        
    );
}
const styles = StyleSheet.create({
    
})

export default ImageDetail;