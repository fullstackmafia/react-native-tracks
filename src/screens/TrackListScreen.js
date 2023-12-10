import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import SignupScreen from './SignupScreen';

const TrackListScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>TrackList Screen</Text>
        <Button 
            title='Go to Track Detail'
            onPress={() => navigation.navigate('TrackDetail')}
        />
    </>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({

})

export default TrackListScreen;