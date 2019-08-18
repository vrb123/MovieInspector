import {createAppContainer,createStackNavigator} from 'react-navigation'
import ViewTotalFilmsScreen from '../screens/ViewTotalFilmsScreen'
import ViewSingleFilmDetailsScreen from '../screens/ViewSingleFilmDetailsScreen'

const filmsStackNavigator=createStackNavigator(
{
    'All films':{
        screen:ViewTotalFilmsScreen
    },
    'ViewSingleFilmDetailsScreen':{
        screen:ViewSingleFilmDetailsScreen
    }
    }, 
)
    
export default FilmsViewContainer=createAppContainer(filmsStackNavigator);