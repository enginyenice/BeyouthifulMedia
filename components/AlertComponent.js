import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions} from 'react-native'
const win = Dimensions.get('window');

export default class AlertComponent extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            status: this.props.status,
            successMessage:"Great!",
            dangerMessage:"Wrong answer!",
        }
    }
    render() {
        return (
            <>
            <View style={[styles.alertModalView]}>
                <View style={[styles.alertModal,(this.state.status == "success")? styles.success:styles.danger]}>
                    <Text style={styles.alertText}>
                        {this.state.status == "success" && (this.state.successMessage)}
                        {this.state.status == "danger" && (this.state.dangerMessage)}
                    </Text>
                </View>
            </View>
            </>

            
        )
    }
}
const styles = StyleSheet.create({
    alertModalView: {
        
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        width: win.width,
        height: win.height,
        flex: 1,
        position: "absolute",
        justifyContent: 'center'
    },
    alertModal: {
        alignItems: 'center',
        width: win.width,
        height: win.height / 12,
        flex: 1,
        top: win.height / 2,
        position: "absolute",
        justifyContent: 'center'
    },
    success:{
        backgroundColor: "#28a745",

    },
    danger:{
        backgroundColor: "#dc3545",
    },
    alertText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    }

})
