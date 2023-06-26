import {
  Text,
  View,
  Image,
  Vibration,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Item from './Item';
import React, {Component} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
type Iprops = {};

type CounterState = {
  text: string;
  id: string;
  arr: any[];
  isEdit: boolean;
};

class Todo extends React.Component<Iprops, CounterState> {
  state: CounterState = {
    id: '',
    text: '',
    arr: [],
    isEdit: true,
  };
  onChangeNumber = (newText: any) => {
    this.setState({text: newText});
  };
  onClick = () => {
    const {text, arr, id} = this.state;
    if (id === '' && text !== '') {
      const obj = {
        id: arr.length,
        text: text,
      };
      this.setState({arr: [...arr, obj], text: ''});
    } else {
      const editedArray = arr.map(each => {
        if (each.id === id) {
          return {id, text};
        }
        return each;
      });
      this.setState({arr: editedArray});
    }
  };
  deleteTodo = (id: string) => {
    const {arr} = this.state;
    console.log(id);
    const filteredArr: any = arr.filter(each => each.id !== id);
    this.setState({arr: filteredArr});
  };
  editTodo = (id: string) => {
    const {arr} = this.state;
    const editArr: any = arr.filter(each => each.id === id);
    console.log(editArr[0].id);
    this.setState({id: editArr[0].id, text: editArr[0].text});
  };
  render() {
    const {arr} = this.state;
    console.log(arr);

    return (
      <View style={styles.container}>
        <Text style={styles.head}>Todo</Text>

        <View>
          <TextInput
            onChangeText={this.onChangeNumber}
            value={this.state.text}
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              width: 400,
              borderTopColor: 'white',
              borderBottomColor: 'white',
              borderRightColor: 'white',
              borderRadius: 10,
              color: 'white',
            }}
          />
          <TouchableHighlight onPress={this.onClick}>
            <Text style={styles.but}>ADD TODO</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.hei}>
          {this.state.arr.length > 0 ? (
            this.state.arr.map((each: any) => {
              return (
                <Item
                  key={each.id}
                  data={each}
                  deleteTodo={this.deleteTodo}
                  editTodo={this.editTodo}
                />
              );
            })
          ) : (
            <Text>no todos</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#738755',
    height: 100,
    flex: 1,
    flexDirection: 'column',
    justyfyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  but: {
    textAlign: 'center',
    color: '#e8dcbc',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'green',
    width: 100,
    height: 30,
    marginLeft: 150,
    marginTop: 20,
    padding: 5,
  },
  head: {
    fontSize: 30,
    color: 'white',
  },
  hei: {
    // height: 500,
    // // backgroundColor: 'black',
    // width:
    flex: 2,
  },
});

export default Todo;
