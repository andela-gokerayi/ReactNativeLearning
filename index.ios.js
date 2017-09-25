/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default class ReactNativeLearning extends Component {

  constructor (props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  _onPressButton() {
    Alert.alert('You tapped the button to add a meal to list of menu!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.carousel}>
          <Text>
            Some kind of carousel
          </Text>
        </View>
        <View>
          <Text style={styles.welcome}>
            Fit4Life
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Add a meal to the menu list"
            onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={this._onPressButton}
            title="Add Menu"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  carousel: {
    backgroundColor: 'powderblue'
  }
});

AppRegistry.registerComponent('ReactNativeLearning', () => ReactNativeLearning);
