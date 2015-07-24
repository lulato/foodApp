/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');


var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;



var styles;
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
});


// Navigation Base for our App
class FoodApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'The Food App',
          component: Main
        }}
      />
    );
  }
};



AppRegistry.registerComponent('FoodApp', () => FoodApp);
