import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../Utils/theme';
import TextFormated from './TextFormated';

export default function Button({onPress, buttontext}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.btn}>
      <TextFormated
        style={{
          fontWeight: '900',
          fontSize: 13,
          color: theme.colors.secondary,
        }}>
        {buttontext}
      </TextFormated>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 15,
  },
});
