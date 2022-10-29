import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../../utils/colors';

const Header = ({title}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.PRIMARY,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 22,
        color: colors.WHITE,
        fontWeight: '700'
    }
})

export default Header;