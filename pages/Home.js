import React, { Component,useState } from 'react'

import { Text, StyleSheet, View, StatusBar, Image, SafeAreaView, TouchableOpacity } from 'react-native'
export default class Home extends Component {

    handleLangChange = () => {
        this.props.onPlay(true);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#fff5fd"
                    barStyle='dark-content'
                    showHideTransition='fade'
                />

                <View style={styles.header}>
                    <View style={styles.baseLogo}>
                        <Image
                            source={require('../assets/logo1.png')}
                            style={{ width: 300, height: 250, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={styles.playButton}>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#022e57' }}>The fox symbolizes fake news and the owl symbolizes true news</Text>
                    </View>
                    <View style={styles.playButton}>
                        <TouchableOpacity
                            style={styles.button} 
                            onPress={this.handleLangChange}
                            >
                            <Text style={{ color: "#fff5fd", fontSize: 28 }} >Play</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={styles.footer}>
                    <View style={styles.sponsor}>
                        <Image
                            source={require('../assets/logo1.png')}
                            style={{ width: 100, height: 100, resizeMode: 'contain' }}
                        />
                        <Image
                            source={require('../assets/logo2.png')}
                            style={{ width: 100, height: 100, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff5fd'
    },
    header: {
        flex: 1,
        // backgroundColor: "red",
        paddingTop: 10
    },
    button: {
        alignItems: "center",
        width: 200,
        backgroundColor: "#022e57",
        padding: 10
    },
    baseLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    mid: {
        flex: 1,
        // backgroundColor: "blue",
        paddingTop: 10
    },
    footer: {
        flex: 0.35,
        // backgroundColor: "pink",
    },
    playButton: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    sponsor: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8
    }
});
