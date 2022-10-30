import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils/colors';

const AddTodo = ({value, onChangeText, onAddPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Type a todo here..."
        style={styles.inputbox}
      />
      <TouchableOpacity style={styles.addBtn} onPress={onAddPress}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  inputbox: {
    borderWidth: 1,
    borderColor: colors.BLACK,
    width: '80%',
  },
  addBtn: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    borderRadius: 8,
  },
  btnText: {
    color: colors.WHITE,
  },
});

export default AddTodo;
