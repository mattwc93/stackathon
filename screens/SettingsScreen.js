import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {

    return (
      <View>
        <Text>You're the man now, dawg!</Text>
      </View>
    )

  }
}
