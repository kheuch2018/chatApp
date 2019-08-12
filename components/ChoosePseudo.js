import React, { Component } from 'react';
import {View,TextInput,Text,StyleSheet,Button} from 'react-native'
import {connect} from 'react-redux'


class ChoosePseudo extends Component {
    render() {
     
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>CHATBI</Text>  
                </View>
                <View style={styles.pseudoView}>
                    <TextInput onChangeText={(val)=> this.props.handlePseudo(val)} value={this.props.pseudo} style={styles.textInput} placeholder='Entrez votre pseudo' ></TextInput>
                    <Button onPress={()=>this.props.navigation.navigate('chat')} color='black' disabled={!this.props.pseudo || this.props.pseudo.length<3} title='Valider'></Button>
                </View>
               
            </View>
        );
    }
}



styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent:'center'
    },
    titleView:{
      flex:1,
      justifyContent: 'center',
    },
    pseudoView:{
      flex: 1,
      width: '60%'
      
    },
    title:{
      fontSize: 50,
      fontWeight: 'bold'
    },
    textInput: {
      borderBottomColor: 'black',
      borderBottomWidth : 2,
      
    },
    buttonView: {
        // alignItems: 'center',
        // flex:1,
        // justifyContent: 'center'
    }
  })
  
const mapStateToProps = state => {
    return{
        pseudo: state.pr.pseudo
    }
}

const mapDispatchToProps = dispatch => {
    return{
        handlePseudo: (pseudo) => dispatch({type: 'HANDLE_PSEUDO', value: pseudo})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChoosePseudo);