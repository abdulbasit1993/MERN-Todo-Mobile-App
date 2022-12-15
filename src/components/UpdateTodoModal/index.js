import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {colors} from '../../utils/colors';

const UpdateTodoModal = ({
  isModalVisible,
  onCloseModal,
  onChangeTitle,
  placeholderText,
  onUpdatePress,
}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          height: 320,
          backgroundColor: '#FFFFFF',
          borderColor: colors.BLACK,
          borderWidth: 2,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            paddingRight: 20,
            paddingTop: 10,
            marginBottom: 20,
            // justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={onCloseModal}>
            <EntypoIcon
              name="cross"
              size={34}
              style={{color: colors.PRIMARY}}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.labelText}>Title:</Text>

        <TextInput
          onChangeText={onChangeTitle}
          placeholder={placeholderText}
          placeholderTextColor={colors.BLACK}
          style={{
            color: colors.BLACK,
            borderColor: colors.BLACK,
            borderWidth: 1,
            width: '70%',
            padding: 10,
          }}
        />

        <TouchableOpacity style={styles.updateBtn} onPress={onUpdatePress}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: colors.BLACK,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
  },
  updateBtn: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    borderRadius: 8,
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnText: {
    color: colors.WHITE,
    fontSize: 18,
  },
});

export default UpdateTodoModal;
