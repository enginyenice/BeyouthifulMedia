import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Home from './pages/Home'

export default class App extends Component {
  onPlay = (langValue) => {
    console.log(langValue)
  }
  render() {
    return (
      <View style={styles.container}>
        <Home onPlay={this.onPlay}></Home>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row"
  },
});

