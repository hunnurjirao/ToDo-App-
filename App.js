import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';


export default function App() {
  const [todo, settodo] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'do homework', key: '2' },
    { text: 'create an app', key: '3' },
  ])


  const pressHandler = (key) => {
    settodo((p) => {
      return p.filter((i) => i.key != key);
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      settodo((prevTodo) => {

        return [
          { text: text, key: Math.random().toString() },
          ...prevTodo
        ];
      })
    } else {
      Alert.alert('OOPS!', 'todo list must be greater than 3 characters!', [
        { text: 'OK' }
      ])
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    marginHorizontal: 5,
    marginTop: 20,
  },
  content: {
    // padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 15,
    padding: 10,
    backgroundColor: 'white'

  }

});
