import React, { Component } from 'react';
import {View,Text} from 'react-native'


class MessageUI extends Component {
    render() {
        return (
            <View style={{backgroundColor: this.props.color, padding: 15, width: '70%', borderRadius: 15, margin:5, alignSelf: this.props.align }}>
                <Text style={{fontSize: 20, textAlign:this.props.textAlign}}>{this.props.mess}</Text>
            </View>
        );
    }
}

export default MessageUI;