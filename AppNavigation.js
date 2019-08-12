import {createStackNavigator,createAppContainer} from 'react-navigation'
import ChoosePseudo from './components/ChoosePseudo';
import Chat from './components/Chat'


const AppNavigation = createStackNavigator({
    choosePseudo: {screen: ChoosePseudo,navigationOptions:{
        header: null
    }},
    chat: {screen:Chat,
    navigationOptions: {
        header:null
    }}
})

export default createAppContainer(AppNavigation)

