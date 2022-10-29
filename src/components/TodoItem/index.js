import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity>
        <MaterialCommunityIcon
          name="delete"
          style={{fontSize: 26, color: colors.RED}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: colors.BLACK,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default TodoItem;
