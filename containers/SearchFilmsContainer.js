import React from 'react'
import {createAppContainer,createStackNavigator} from 'react-navigation'
import ViewSingleFilmDetailsScreen from '../screens/ViewSingleFilmDetailsScreen'
import SearchFilmScreen from '../screens/SearchFilmScreen'

const filmsSearchNavigator=createStackNavigator({
    'Search':{
        screen:SearchFilmScreen
    },
    'ViewSingleFilmDetailsScreen':{
      screen:ViewSingleFilmDetailsScreen
    }
  })
  
export default FilmsSearchContainer=createAppContainer(filmsSearchNavigator);