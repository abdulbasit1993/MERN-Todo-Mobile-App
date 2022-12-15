import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
  Keyboard,
  ToastAndroid
} from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
import Loader from '../components/Loader';
import {getCall, postCall, deleteCall} from '../config/apiService';
import {BASE_URL} from '../config/apiURL';
import {GET_TODOS, CREATE_TODO, DELETE_TODO} from '../config/apiEndPoints';

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

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  const getTodos = async () => {
    setIsLoading(true);
    await getCall(`${BASE_URL}${GET_TODOS}`)
      .then(res => {
        if (res.status == 200) {
          setIsLoading(false);
        }
        console.log('response data getTodos ====> ', res.data);
        setTodoData(res.data);
      })
      .catch(err => {
        console.log(err);
        ToastAndroid.show(`Error: ${err}`, ToastAndroid.SHORT);
        setIsLoading(false);
      });
  };

  const handleSubmit = async () => {
    if (todoTitle != '') {
      console.log('calling POST API..');

      setIsLoading(true);

      const data = {
        title: todoTitle,
        content: '',
      };

      await postCall(`${BASE_URL}${CREATE_TODO}`, data)
        .then(res => {
          console.log('response data createTodo =======> ', res);
          if (res.status == 200) {
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      Alert.alert('Error', 'Please enter a todo first!');
    }
    setTodoTitle('');
    Keyboard.dismiss();
    getTodos();
  };

  const handleDeleteTodo = todoItem => {
    console.log('item to delete...', todoItem);
    Alert.alert(
      'Delete todo',
      `Are you sure you want to delete "${todoItem?.title}"?`,
      [
        {
          text: 'Yes',
          onPress: async () => {
            await deleteCall(`${BASE_URL}${DELETE_TODO}/${todoItem?._id}`)
              .then(res => console.log('Deleted successfully! ', res.data))
              .catch(err => console.log('Error: ', err));

            getTodos();
          },
        },
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Todo List" />

      <AddTodo
        value={todoTitle}
        onChangeText={text => setTodoTitle(text)}
        onAddPress={handleSubmit}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={todoData}
          renderItem={({item}) => (
            <TodoItem
              name={item.title}
              onTodoPress={() => {navigation.navigate('TodoDetailScreen', {data: item})}}
              onDeletePress={() => handleDeleteTodo(item)}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});

export default Home;
