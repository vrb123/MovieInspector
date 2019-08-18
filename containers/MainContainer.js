import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import FilmsSearchContainer from './SearchFilmsContainer'
import FilmsViewContainer from './ViewFilmsContainer'
import SettingsContainer from './SettingsContainer'

const tabNavigator=createBottomTabNavigator({
    'Discover films':{
      screen:FilmsViewContainer
    },
    'Search films':{
      screen:FilmsSearchContainer
    },
    'Settings':{
        screen:SettingsContainer
      },
  },{
    tabBarOptions: {
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: 'black',
      },
    }
})
  
  
export default Container=createAppContainer(tabNavigator);