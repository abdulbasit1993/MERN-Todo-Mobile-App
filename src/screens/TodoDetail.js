import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Keyboard,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import {patchCall} from '../config/apiService';
import {UPDATE_TODO} from '../config/apiEndPoints';
import {BASE_URL} from '../config/apiURL';
import UpdateTodoModal from '../components/UpdateTodoModal';
import {colors} from '../utils/colors';
import moment from 'moment';

const TodoDetail = ({route}) => {
  const todoItem = route.params.data;
  console.log('todoItem ===>>>>> ', todoItem);

  const [isUpdateTodoModalVisible, setIsUpdateTodoModalVisible] =
    useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [isTodoUpdatedRecently, setIsTodoUpdatedRecently] = useState(false);
  console.log('updatedTitle ==>>>>> ', updatedTitle);

  const handleUpdateTodo = async () => {
    const data = {
      title: updatedTitle,
    };

    if (updatedTitle != '') {
      const data = {
        title: updatedTitle,
      };

      await patchCall(`${BASE_URL}/${UPDATE_TODO}/${todoItem?._id}`, data)
        .then(res => {
          console.log('response data update todo =======> ', res);
          ToastAndroid.show('Todo Updated Successfully!', ToastAndroid.SHORT);
          setIsUpdateTodoModalVisible(false);
        })
        .catch(err => {
          console.log(err);
          ToastAndroid.show(err, ToastAndroid.SHORT);
        });
    } else {
      Alert.alert('Error', 'Please Enter Something!');
    }
    setUpdatedTitle('');
    Keyboard.dismiss();
  };

  useEffect(() => {
    const x = new Date(todoItem?.createdAt);
    const y = new Date(todoItem?.updatedAt);

    console.log('Are the dates same??? ', x.getTime() === y.getTime());
    if (x.getTime() === y.getTime()) {
      setIsTodoUpdatedRecently(false);
    } else {
      setIsTodoUpdatedRecently(true);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Todo Detail" />
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.labelText}>Title:</Text>
          <Text style={styles.todoTitle}>{todoItem?.title}</Text>
        </View>

        <View style={{marginBottom: 20}}>
          <Text style={styles.labelText}>Date created:</Text>
          <Text style={styles.todoTitle}>
            {moment(todoItem?.createdAt).format('MMM D, YYYY')},{' '}
            {moment(todoItem?.createdAt).format('hh:mm A ')}
            {'\n'}({moment(todoItem?.createdAt).fromNow()})
          </Text>
        </View>

        {isTodoUpdatedRecently && (
          <View style={{marginBottom: 20}}>
            <Text style={styles.labelText}>Updated at:</Text>
            <Text style={styles.todoTitle}>
              {moment(todoItem?.updatedAt).format('MMM D, YYYY')},{' '}
              {moment(todoItem?.updatedAt).format('hh:mm A ')}
              {'\n'}({moment(todoItem?.updatedAt).fromNow()})
            </Text>
          </View>
        )}
      </View>

      <View style={{position: 'absolute', bottom: 30, left: 120}}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            setIsUpdateTodoModalVisible(!isUpdateTodoModalVisible);
          }}>
          <Text style={styles.btnText}>Update Todo</Text>
        </TouchableOpacity>
      </View>

      <UpdateTodoModal
        isModalVisible={isUpdateTodoModalVisible}
        onCloseModal={() =>
          setIsUpdateTodoModalVisible(!isUpdateTodoModalVisible)
        }
        placeholderText={todoItem?.title}
        onChangeTitle={text => setUpdatedTitle(text)}
        onUpdatePress={handleUpdateTodo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: colors.BLACK,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  todoTitle: {
    color: colors.BLACK,
    fontSize: 22,
  },
  addBtn: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    borderRadius: 8,
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.WHITE,
    fontSize: 18,
  },
});

export default TodoDetail;
