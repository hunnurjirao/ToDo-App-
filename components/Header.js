import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO APP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 40,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }

});