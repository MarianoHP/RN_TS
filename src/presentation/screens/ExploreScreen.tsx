import * as React from 'react';
import {Button, View, Text} from 'react-native';

const ExploreScreen = ({navigation}: any) => {
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
          Explore Screen
        </Text>
        <Button onPress={() => navigation.navigate('SettingScreenStack')} title="Go to Setting Screen" />
        <Button onPress={() => navigation.navigate('HomeScreen')} title="Go to Home Screen" />
        <Button onPress={() => navigation.goBack()} title="Back" />
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

export default ExploreScreen;
