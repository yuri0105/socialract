import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {theme} from '../Utils/theme';
import TextFormatted from './TextFormated';

export default function Header({
  source,
  onPress,
  Headertext,
  sourcetwo,
  onPressTwo,
  backgroundColor,
  sourcethree,
  skippress,
  textcolor,
  sourcetwoH,
  sourcetwoW,
  Othertext,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: backgroundColor,
        paddingVertical: 13,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{height: 20, width: 20, resizeMode: 'contain'}}
          source={source}
          // source={require('../Assets/Backwhite.png')}
        />
      </TouchableOpacity>
      <TextFormatted
        style={{
          color: textcolor || theme.colors.Black,
          fontSize: 20,
          fontWeight: '700',
          textAlign: 'center',
        }}>
        {Headertext}
      </TextFormatted>
      {!!Othertext && (
        <TextFormatted
          style={{
            color: textcolor || theme.colors.Black,
            fontSize: 10,
            fontWeight: '600',
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}>
          {Othertext}
        </TextFormatted>
      )}
      <TouchableOpacity onPress={onPressTwo}>
        <Image
          style={{
            height: sourcetwoH || 20,
            width: sourcetwoW || 20,
            resizeMode: 'contain',
          }}
          source={sourcetwo}
        />
      </TouchableOpacity>
      {!!sourcethree && (
        <TouchableOpacity onPress={skippress}>
          <Image
            style={{
              height: 20,
              width: 30,
              resizeMode: 'contain',
              borderWidth: 1,
            }}
            source={sourcethree}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
