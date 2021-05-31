import React, { Component } from 'react'
import { StyleSheet, View ,StatusBar} from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Home from './pages/Home'
import Game from './pages/Game';

export default class App extends Component {
  state = {
    selectedScreen: "Home"
  }
  onSelectedScreen = (params) => {
    this.setState({ selectedScreen: params })
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
                        <StatusBar
                    animated={true}
                    barStyle='default'
                    showHideTransition='none'
                />
        <View style={styles.container}>
          {this.state.selectedScreen == "Home" &&
            <Home onSelectedScreen={this.onSelectedScreen}></Home>
          }
          {
            this.state.selectedScreen == "Game" &&
            <Game onSelectedScreen={this.onSelectedScreen}></Game>
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

