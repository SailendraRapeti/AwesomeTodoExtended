import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
type Iprop = {
  data: any;
  deleteTodo: any;
  editTodo: any;
};

class Item extends React.Component<Iprop> {
  render() {
    const {data, deleteTodo, editTodo} = this.props;
    return (
      <View style={styless.container}>
        <Text style={{color: 'white', width: 100}}>{data.text}</Text>
        <TouchableHighlight
          onPress={() => {
            deleteTodo(data.id);
          }}>
          <Text style={styless.butt}>Delete</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            editTodo(data.id);
          }}>
          <Text style={styless.butto}>Edit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styless = StyleSheet.create({
  container: {
    flexDirection: 'row',

    height: 40,
    margin: 10,
    backgroundColor: '#337cb0',
    color: 'white',
    width: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  butt: {
    backgroundColor: '#d14372',
    height: 30,
    width: 80,
    color: 'white',
    textAlign: 'center',
    padding: 4,
  },
  butto: {
    backgroundColor: '#9bdb81',
    height: 30,
    width: 80,
    color: 'white',
    textAlign: 'center',
    padding: 4,
  },
});

export default Item;
