var React = require('react-native');
var api = require('../Utils/api');
var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var styles;
styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  title:{
    marginBottom:20,
    fontSize: 20,
    textAlign: 'center',
    color: 'red'
  },
  searchInput:{
    height:50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    color: 'red'
  },
  buttonText:{
    fontSize:18,
    color: 'yellow',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit(){
    // Update or indicatorIOS
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username)
    .then((res) => {

      if(res.message === 'Not Found'){
        this.setState({
          error: 'User not found',
          isLoading: false
        })
      } else {
        // console.log('SUBMIT', res.name)
        // push a new route to go to a new screen with new 'res' data
        this.props.navigator.push({
          title: res.name || 'Select Option',
          component: Dashboard,
          passProps: { 
            userInfo: res,
            myProp: 'foo'
          }
        });
        this.setState({
          isLoading: false,
          error: false,
          username: ''
        })
      }
    })
  }

  render() {
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return(
      <View style={styles.mainContainer}>
      <Text style={styles.title}>Search for something Here</Text>
      <TextInput
        style={styles.searchInput}
        value={this.state.username}
        onChange={this.handleChange.bind(this)}
      />

      <TouchableHighlight
        style={styles.button}
        onPress={this.handleSubmit.bind(this)}
        underlyingColor="white">
        <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableHighlight>
      <ActivityIndicatorIOS
        animating = {this.state.isLoading}
        color="red"
        size="large"
      />
      {showErr}
      </View>
      )
  }
}

module.exports = Main;