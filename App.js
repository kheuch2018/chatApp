import React,{Component} from 'react'
import AppNavigation from './AppNavigation'
import {createStore,combineReducers} from 'redux'
import PseudoReducer from './store/reducers/PseudoReducer'
import {Provider} from 'react-redux'
import ChatReducer from './store/reducers/ChatReducer'

class App extends Component{
  render(){

    const reducers = combineReducers({
      pr: PseudoReducer,
      cr: ChatReducer
    })
    const store = createStore(reducers)     
    return(
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    )
  }
}


export default App