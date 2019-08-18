import {createAppContainer,createStackNavigator} from 'react-navigation'
import SettingsScreen from '../screens/SettingsScreen'

const settingsNavigator=createStackNavigator({
    'Settings':{
        screen:SettingsScreen
    },
  })
  
export default SettingsContainer=createAppContainer(settingsNavigator);