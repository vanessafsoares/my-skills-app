import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity
      testID="add-button"
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.txtButton}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A379F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  txtButton: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
