/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={style.title}>
          <Text style={style.title_text}>To-Do Application</Text>
          <View
            style={{
              backgroundColor: '#ccc',
              padding: 10,
              flexDirection: 'row',
            }}>
            <TextInput style={style.input} onChangeText={text => {}} />
            <TouchableOpacity style={style.button}>
              <Text style={style.title_text}>Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  title: {backgroundColor: 'blue', paddingTop: 30},
  title_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  input: {padding: 10, backgroundColor: 'white', flex: 1},
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginLeft: 10,
  },
});
