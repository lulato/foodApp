var React = require('react-native');
var Badge = require('./Badge');

var {
  Text,
  View,
  StyleSheets,
  ScrollView
} = React;

var styles = StyleSheets.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends React.Component {
  render(){

    var userInfo = this.props.userInfo;
    var topicArray = ['company','location', 'followers',
    'following', 'email', 'bio', 'public_repos'];


    // I am about to map the new list for the views
    //  5:45
    var list = topicArray.map((item, index) => {});

    return(
      <ScrollView style={ style.container }>
        <Badge userInfo={ this.props.userInfo } />
      </ScrollView>
    )
  }
};

module.exports = React;