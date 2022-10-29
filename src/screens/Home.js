import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';

const dummyData = [
  {
    id: '1',
    name: 'item 1',
    description: 'desc 1',
  },
  {
    id: '2',
    name: 'item 2',
    description: 'desc 2',
  },
  {
    id: '3',
    name: 'item 3',
    description: 'desc 3',
  },
  {
    id: '4',
    name: 'item 4',
    description: 'desc 4',
  },
];

const Home = () => {
  return (
    <SafeAreaView>
      <Header title="Todo List" />

      <AddTodo />

      <View>
        <FlatList
          data={dummyData}
          renderItem={({item}) => <TodoItem name={item.name} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
