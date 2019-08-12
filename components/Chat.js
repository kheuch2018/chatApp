import React, { Component } from 'react';
import {View,StyleSheet,Button,TextInput, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import MessageUI from './commons/MessageUI';
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDz91-OhaSFxDLBURr76DVlHr-kaJvz0to",
    authDomain: "test-4deaf.firebaseapp.com",
    databaseURL: "https://test-4deaf.firebaseio.com",
    projectId: "test-4deaf",
    storageBucket: "",
    messagingSenderId: "927034319214",
    appId: "1:927034319214:web:4e6b8288c11d8457"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  
  const database = firebase.database();
  class Chat extends Component {

      
      addMessage = (msg) =>{
          this.props.addMessage()
          clee = 'mess'+Date.now()
        firebase.database().ref('/messages/'+Date.now()).set({ msg  })
    }

    render() {
        
        firebase.database().ref('/messages').once('value').then(snapshot=>{
            if(snapshot  && snapshot.exists()){
            this.props.loadMessages(snapshot.val() )
      
        }
    })
    

        
        return (
            <View style={styles.container}>
               <ScrollView
               ref={ref => this.scrollView = ref}
               onContentSizeChange={(contentWidth, contentHeight)=>{        
                   this.scrollView.scrollToEnd({animated: true});
               }}
               >

                {Object.keys(this.props.messages).map((m,i)=><MessageUI key={i} mess={this.props.messages[m].msg.message} textAlign={(this.props.messages[m].msg.user === this.props.user)? 'right': 'left'} color={(this.props.messages[m].msg.user === this.props.user)? '#479CE5': '#F5F7F9'} align={(this.props.messages[m].msg.user === this.props.user) ?'flex-end':'flex-start'} />)}
               </ScrollView>
                <TextInput placeholder='Votre message ici ...' value={this.props.message}  onChangeText={(val)=> this.props.handleMessage(val)} />
                <Button onPress={()=> this.addMessage({user: this.props.user, message: this.props.message}) } title='Envoyer'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end'
    }
})


const mapStateToProps = state =>{
    return{
        messages: state.cr.messages,
        user: state.pr.pseudo,
        message: state.cr.message
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        loadMessages: (val) => dispatch({type: 'LOAD_MESSAGES', value: val}),
        addMessage: () => dispatch({type: 'ADD_MESSAGE'}),
        handleMessage: (val) => dispatch({type: 'CHANGE_MESSAGE', value: val}),
   
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat);