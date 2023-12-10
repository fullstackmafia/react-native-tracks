import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavigationLink from '../components/NavigationLink';


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);


    console.log(state)

    return ( 
    <View style={styles.container}>
         <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
        <AuthForm
            headerText="Sign up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={({ email, password }) => signup({email, password})}
        />
        <NavigationLink
            routeName="Signin"
            text="Already have an account? Sign in instead!"
        />
    </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignupScreen;