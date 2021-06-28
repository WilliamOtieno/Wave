import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { Icon } from 'react-native-vector-icons/FontAwesome'

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Chat',
            headerBackTitle: 'Chats'
        })
    }, [navigation])

    return (
        <View style={styles.container} >
            <Input placeholder="Enter a Chat name" value={input} onChangeText={(text) => setInput(text)}
             leftIcon={
                <Icon name='wechat' type='antdesign' size={24} color='black' />
             }/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {}
})
