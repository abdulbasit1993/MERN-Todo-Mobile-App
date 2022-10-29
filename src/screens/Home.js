import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
import {getCall} from '../config/apiService';
import {BASE_URL} from '../config/apiURL';
import {GET_TODOS} from '../config/apiEndPoints';

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
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    getCall(`${BASE_URL}${GET_TODOS}`)
      .then(res => {
        console.log('response data getTodos ====> ', res.data);
        setTodoData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <SafeAreaView>
      <Header title="Todo List" />

      <AddTodo />

      <View>
        <FlatList
          data={todoData}
          renderItem={({item}) => <TodoItem name={item.title} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
