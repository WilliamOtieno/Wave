import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image, Text } from 'react-native-elements'
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({headerBackTitle: 'Login'})
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.update({
                displayName: name,
                photoURL: imageUrl || 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
            })
        }).catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <StatusBar style='light' />
            <Text h3 style={{marginBottom: 50}} >Create a Wave Account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder='Full Name' autofocus type='text' value={name} onChange={(text) => setName(text)}/>
                <Input placeholder='Email Address' type='email' value={email} onChange={(text) => setEmail(text)}/>
                <Input placeholder='Password' secureTextEntry type='password' value={password} onChange={(text) => setPassword(text)}/>
                <Input placeholder='Profile Picture URL (Optional)' type='text' value={imageUrl} onChange={(text) => setImageUrl(text)} onSubmitEditing={register} />
            </View>
            
            <Button containerStyle={styles.button} raised={true} title='Register' onPress={register}/>

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        marginTop: 10
    },
    inputContainer: {
        width: 350,
    },
})
