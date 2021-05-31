import React, { Component } from 'react'
import { SafeAreaView, Image, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { Card, Layout, Text, Divider, Button, Avatar } from '@ui-kitten/components';
const win = Dimensions.get('window');
const ratio = win.width / 640;

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.selectedQuestion.key,
            answer: this.props.selectedQuestion.answer,
            source: this.props.selectedQuestion.source,
        }
    }
    sectionTrue = () => {
        if (this.state.answer == true)
            {
                this.props.questionResult({
                    result: true,
                    key: this.state.key
                });
            }
        else
            {
                this.props.questionResult({
                    result: false,
                    key: this.state.key
                });
            }
    }
    sectionFalse = () => {
        if (this.state.answer == false)
            {
                this.props.questionResult({
                    result: true,
                    key: this.state.key
                });
            }
        else
            {
                this.props.questionResult({
                    result: false,
                    key: this.state.key
                });
            }
    }
    getImage = () => {
        this.state = {
            key: this.props.selectedQuestion.key,
            answer: this.props.selectedQuestion.answer,
            source: this.props.selectedQuestion.source,
        }

        return (
            <>
             <View style={{ flex: 0.3 }}>
                        <Text category='h6' style={{ textAlign: 'center' }}>The fox symbolizes fake news and the owl symbolizes true news</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={this.state.source}
                            resizeMode={'cover'}
                            style={{ width: win.width, height: 360 * ratio, }}
                        ></Image>
                    </View>
                    <View style={styles.sectionsView}>
                        <TouchableOpacity
                            onPress={this.sectionTrue}
                            style={styles.trueButton}>
                            <Image
                                style={styles.sectionImage}
                                source={require('../assets/Section/True.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.sectionFalse}
                            style={styles.falseButton}>
                            <Image
                                style={styles.sectionImage}
                                source={require('../assets/Section/False.png')} />
                        </TouchableOpacity>
                    </View>
            </>
        )
    }

    render() {
        return (
            <Card style={{ flex: 1 }} style={styles.card}>
                {this.state.source != null && (this.getImage())}

            </Card>
        )
    }
}

const styles = StyleSheet.create({

    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    falseButton: {
        borderRadius: 10,
        height: win.width/2.5,
        width: win.width/2.5,
        backgroundColor: '#dc3545',
        alignItems: 'center',
        justifyContent: 'center'
    },
    trueButton: {
        borderRadius: 10,
        height: win.width/2.5,
        width: win.width/2.5,
        backgroundColor: '#28a745',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionImage: {
        position: 'absolute',
        width: 150, resizeMode: 'contain'
    },
    sectionsView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
