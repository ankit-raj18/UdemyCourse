import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function ComponentsScreen(props) {
    const intro='My name is Ankit raj!'
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subTextStyle}>{intro}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45,
        },
    subTextStyle:{
        fontSize : 20,
    }
})
export default ComponentsScreen;