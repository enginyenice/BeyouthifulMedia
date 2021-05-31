import React, { Component } from 'react'
import { SafeAreaView,Image, StyleSheet,Dimensions, View, TouchableOpacity  } from 'react-native';
import { Card, Layout, Text,Divider, Button, Avatar } from '@ui-kitten/components';
const win = Dimensions.get('window');
const ratio = win.width/640;
export default class Game extends Component {

    modal = () => {

        return (
            <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>
        )
    }
    render() {
        return (
            <Layout style={styles.container} level='1'>
                <Text category='h1' style={{textAlign:'center'}}>eTwinning</Text>
                <Card  style={{flex:1}} style={styles.card}>
                    <View style={{flex:0.3}}>
                    <Text category='h6' style={{textAlign:'center'}}>The fox symbolizes fake news and the owl symbolizes true news</Text>
                    </View>
                   
                    <View style={{flex:1}}>
                    <Image
                        source={require("../assets/True/True1.jpeg")}
                        resizeMode={'cover'}
                        style={{   width: win.width, height: 360 * ratio, }}
                        ></Image>  
                    </View>
                    <View style={styles.sectionsView}>
                    <TouchableOpacity style={styles.trueButton}>
                        <Image
                        style={styles.sectionImage}
                        source={require('../assets/Section/True.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.falseButton}>
                        <Image
                        style={styles.sectionImage}
                        source={require('../assets/Section/False.png')} />
                    </TouchableOpacity>
                    </View>
                </Card>
                
                </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    card:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    falseButton:{
        borderRadius:10,
        height:200,
        width:200,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    trueButton:{
        borderRadius:10,
        height:200,
        width:200,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    sectionImage:{
        position:'absolute',
        width:150,resizeMode:'contain'
    },
    sectionsView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    }
})
