import React from 'react'
import {View,Button} from 'react-native'
import FilmsList from '../entities/FilmsList'
import {search} from '../mockData'


export default class ViewTotalFilmsScreen extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Films Inspector",
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#A19F9F',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    };
  };
  
  onSingleFilmClicked=(film)=>{
      this.props.navigation.push('ViewSingleFilmDetailsScreen',{film})
  }

  render(){
    return (
      <FilmsList films={search.Search} onSingleFilmClicked={this.onSingleFilmClicked} />
    )
  }

}