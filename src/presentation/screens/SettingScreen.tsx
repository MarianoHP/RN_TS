import * as React from 'react';
import {Button, View, Text} from 'react-native';

const SettingScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, padding: 16}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Setting Screen
        </Text>
        <Button onPress={() => navigation.navigate('HomeScreen')} title="Go to Home Screen" />
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          color: 'grey',
        }}>
        Studying Navigation
      </Text>
    </View>
  );
};

export default SettingScreen;
