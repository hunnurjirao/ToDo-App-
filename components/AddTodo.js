import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState()

    const changeText = (val) => {
        setText(val)

    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add todo here...'
                onChangeText={changeText}
            />
            <Button title='Add Todo' onPress={() => submitHandler(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
});