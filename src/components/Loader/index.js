import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {colors} from '../../utils/colors';

const {width, height} = Dimensions.get('window');

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.BLACK} />
      <Text style={styles.loaderText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // zIndex: 1,
    // backgroundColor: '#000000',
    // opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: height - 250,
  },
  loaderText: {
    // color: colors.WHITE,
    fontSize: 20,
    color: colors.BLACK,
    marginTop: 10,
  },
});

export default Loader;
