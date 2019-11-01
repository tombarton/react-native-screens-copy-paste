import React from 'react';
import {Text, TextInput, ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {useScreens} from 'react-native-screens';

useScreens(); // Toggle to view issue.

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>Home Screen</Text>
        <TextInput placeholder="hello world" />
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
