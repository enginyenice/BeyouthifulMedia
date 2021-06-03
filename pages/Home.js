import React, { Component, useState } from 'react'

import {StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Button,Text} from '@ui-kitten/components';
export default class Home extends Component {

    handleLangChange = () => {
        this.props.onSelectedScreen("Game");
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.baseLogo}>
                        {/* <Image
                            source={require('../assets/logo1.png')}
                            style={{ width: 300, height: 250, resizeMode: 'contain' }}
                        /> */}
                        <Text style={styles.LogoText} status='primary'>FAKES OUT!</Text>
                    </View>
                </View>
                <View style={styles.mid}>
                        <Text status='primary' style={{ fontSize: 20, textAlign: 'center'}}>The fox symbolizes fake news and the owl symbolizes true news</Text>
                        <Button style={styles.button} status='primary' onPress={this.handleLangChange}>
                        PLAY
                    </Button>
                   


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
        justifyContent: 'space-evenly',
    },
    header: {
        flex: 1,
        paddingTop: 10
    },
    button: {
        alignItems: "center",
        width: 200,
        padding: 10
    },
    baseLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    mid: {
        flex: 1,
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop: 10
    },
    footer: {
        flex: 0.45,
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
    },
    LogoText:{
        fontSize:70
    }
});
