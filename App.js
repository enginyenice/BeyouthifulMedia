import React, { Component } from 'react'
import { StyleSheet, View ,StatusBar} from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Home from './pages/Home'
import Game from './pages/Game';

export default class App extends Component {
  state = {
    play: true
  }
  onPlay = (langValue) => {
    this.setState({ play: langValue })
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
                        <StatusBar
                    animated={true}
                    barStyle='dark-content'
                    showHideTransition='fade'
                />
        <View style={styles.container}>
          {this.state.play == false &&
            <Home onPlay={this.onPlay}></Home>
          }
          {
            this.state.play == true &&
            <Game></Game>
          }
        </View>
      </ApplicationProvider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
});

