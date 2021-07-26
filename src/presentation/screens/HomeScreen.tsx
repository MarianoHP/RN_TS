import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, PixelRatio, Image, Dimensions, Platform} from 'react-native';

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
    logoContainer: {
        width: 100,
        height: 100,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default class Home extends React.Component {
  renderTouchableOpacity = (pressHandler: any, text: string) => (
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
          <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  );

  goExploreScreenButton = (navigation: any) => (
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExploreScreen')}>
          <Text style={styles.buttonText}>{'Go to Explore Tab'}</Text>
      </TouchableOpacity>
  );

  getView = (navigation: any, windowWidth: string, windowHeight: string) => (
      <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Home Screen</Text>
              <View style={styles.logoContainer}>
                  <Image
                      style={styles.logo}
                      source={{
                          uri: 'https://www.theblocklearning.com/wp-content/uploads/2018/09/512px-React-icon.svg.png',
                      }}
                  />
              </View>
              {Platform.OS === 'android' && (
                  <>
                      <Text>Android</Text>
                  </>
              )}
              {Platform.OS === 'ios' && (
                  <>
                      <Text>iOS</Text>
                  </>
              )}
              <Text>
          Dimensions: {windowWidth}, {windowHeight}
              </Text>
              {this.goExploreScreenButton(navigation)}
              {this.renderTouchableOpacity(() => navigation.navigate('TopTabStack'), 'Go to Top Tab Page')}
              {this.renderTouchableOpacity(() => navigation.navigate('RandomScreen'), 'Go to Stack Elements')}
          </View>
          <Text style={styles.contentText}>Studying Navigation</Text>
      </View>
  );

  render() {
      const {navigation}: any = this.props;
      const windowWidth = Dimensions.get('window').width.toFixed(2);
      const windowHeight = Dimensions.get('window').height.toFixed(2);
      return this.getView(navigation, windowWidth, windowHeight);
  }
}
