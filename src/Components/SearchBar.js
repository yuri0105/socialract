import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../Utils/theme';
import TextFormatted from './TextFormated';

export default function CustomTextInput({
  placeholder,
  Heading,
  onChangeText,
  value,
  nulll,
  editable,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  onSubmitEditing,
  cancelOnPress,
  cross,
  opacitytwo,
  homeSearch,
  search,
  multiline,
  height,
  borderRadius,
  searchscreen,
}) {
  return (
    <View>
      <View
        style={{
          backgroundColor: theme.colors.searchbar,
          paddingHorizontal: 20,
          borderRadius: 10,
          marginTop: 10,
          opacity: opacitytwo,
          width: Dimensions.get('window').width - 40,
          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,

          // elevation: 5,
          paddingVertical: 7,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 19, width: 19, resizeMode: 'contain'}}
            source={require('../assets/Search_gray.png')}
          />

          <TextInput
            editable={editable}
            style={[styles.textInput, {height: height}]}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.searchbar_text}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            multiline={multiline}
          />
          {!!searchscreen && (
            <Image
              style={{height: 20, width: 20, resizeMode: 'contain'}}
              // source={require('../Assets/Cropping/Icons/Filters.png')}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 6,
    color: theme.colors.searchbar_text,
    flex: 1,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 14,
    color: theme.colors.Black,
    fontWeight: '700',
  },
  error: {
    color: '#900',
    textDecorationLine: 'underline',
    marginHorizontal: 20,
  },
  optional: {
    fontSize: 14,
    // marginHorizontal: 30,
    // marginTop: 20,
    color: theme.colors.placeholder,
    fontWeight: '700',
  },
});
