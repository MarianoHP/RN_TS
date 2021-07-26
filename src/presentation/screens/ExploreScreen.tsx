import * as React from 'react';
import {View, Text, StyleSheet, PixelRatio, TouchableOpacity} from 'react-native';

export default class Random extends React.Component {
  renderTouchableOpacity = (pressHandler: any, text: string) => (
    <TouchableOpacity style={styles.button} onPress={pressHandler}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  getView = (navigation: any) => (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Dummy Screen</Text>
        {this.renderTouchableOpacity(() => navigation.navigate('SettingScreenStack'), 'Go to Setting Screen')}
        {this.renderTouchableOpacity(() => navigation.navigate('HomeScreen'), 'Go to Home Screen')}
        {this.renderTouchableOpacity(() => navigation.goBack(), 'Back')}
      </View>

      <Text style={styles.contentText}>Studying Navigation</Text>
    </View>
  );

  render() {
    const {navigation}: any = this.props;
    return this.getView(navigation);
  }
}

const textFontScale = PixelRatio.getFontScale();

let titleFontSize = 40;

if (PixelRatio.get() <= 2) {
  titleFontSize = 80;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: '2%',
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: titleFontSize,
    textAlign: 'center',
    marginBottom: '2.5%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: '0.5%',
    marginTop: '1%',
    height: '5%',
    width: '40%',
  },
  buttonText: {
    fontSize: 15 / textFontScale,
  },
  contentText: {
    fontSize: 20 / textFontScale,
    textAlign: 'center',
    color: 'grey',
  },
});
