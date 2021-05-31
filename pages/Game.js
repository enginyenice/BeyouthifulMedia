import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Button,Layout, Text } from '@ui-kitten/components';
import AlertComponent from '../components/AlertComponent';
import Question from '../components/Question';

export default class Game extends Component {
    constructor(props) {

        super(props);
        this.state = {
            score: 0,
            questions: null,
            modalShow: false,
            modalStatus: "danger",
            selectedQuestion: 0,
            gameOver: false
        }
    }
    componentDidMount() {
        var questions = [
            {
                key: 0,
                source: require('../assets/True/True1.jpeg'),
                answer: true
            },
            {
                key: 1,
                source: require('../assets/True/True2.jpeg'),
                answer: true
            },
            {
                key: 2,
                source: require('../assets/True/True3.jpeg'),
                answer: true
            },
            {
                key: 3,
                source: require('../assets/True/True4.jpeg'),
                answer: true
            },
            {
                key: 4,
                source: require('../assets/True/True5.jpeg'),
                answer: true
            },
            {
                key: 5,
                source: require('../assets/True/True6.jpeg'),
                answer: true
            },
            {
                key: 6,
                source: require('../assets/False/False1.jpeg'),
                answer: false
            },
            {
                key: 7,
                source: require('../assets/False/False2.jpeg'),
                answer: false
            },
            {
                key: 8,
                source: require('../assets/False/False3.jpeg'),
                answer: false
            },
            {
                key: 9,
                source: require('../assets/False/False4.jpeg'),
                answer: false
            },
            {
                key: 10,
                source: require('../assets/False/False5.jpeg'),
                answer: false
            },
            {
                key: 11,
                source: require('../assets/False/False6.jpeg'),
                answer: false
            },
            {
                key: 12,
                source: require('../assets/False/False7.jpeg'),
                answer: false
            },
            {
                key: 13,
                source: require('../assets/False/False8.jpeg'),
                answer: false
            },
            {
                key: 14,
                source: require('../assets/False/False9.jpeg'),
                answer: false
            }


        ];

        var shuffled = questions.sort(() => Math.random() - 0.5);
        this.setState({ questions: shuffled });

    }
    questionResult = (result) => {

        if (result.result == true)
            this.setState({ score: this.state.score + 1 })
        this.setState({ modalShow: true, modalStatus: (result.result == true) ? "success" : "danger" });

        setTimeout(() => {
            this.setState({ modalShow: false })

            if (this.state.selectedQuestion + 1 >= this.state.questions.length) {
                this.setState({ gameOver: true });
            } else {
                this.setState({ selectedQuestion: this.state.selectedQuestion + 1 });
            }

        }, 1000);
    }
    getQuestion = (question) => {
        return (
            <Question
                questionResult={this.questionResult}
                selectedQuestion={question}
            ></Question>
        )
    }
    gameOver = () => {
        return (
            <View style={styles.gameOver}>
                <Text style={styles.gameOverText}>Score: {this.state.score}/{this.state.questions.length}</Text>
                <Button style={styles.button} status='primary' onPress={this.handleLangChange}>Back To Home</Button>
            </View>
        )
    }
    handleLangChange = () => {
        this.props.onSelectedScreen("Home");
    }
    render() {
        return (
            <Layout style={styles.container} level='1'>
                <Text category='h1' style={{ textAlign: 'center' }}>eTwinning</Text>

                {this.state.questions != null && this.state.gameOver == false && this.getQuestion(this.state.questions[this.state.selectedQuestion])}
                {this.state.modalShow == true && (<AlertComponent status={this.state.modalStatus}></AlertComponent>)}
                {this.state.gameOver == true && this.gameOver()}
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    gameOver: {
        flex: 1,

        justifyContent: 'space-evenly'
    },
    gameOverText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50
    }

})
