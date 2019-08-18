import React from 'react'
import {ScrollView,Button,Text,Image} from 'react-native'

import {filmDetail} from '../api' 

import FilmDetails from '../entities/FilmDetails'

export default class ViewSingleFilmDetailsScreen extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('film').Title,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#A19F9F',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    };
  };

  state={
    filmDetails:null,
    isLoaded:false,
    error:false
  }

  onFinish=(obj)=>{
    this.setState(obj);
  }

  componentDidMount(){
      const currentFilm=this.props.navigation.getParam('film');
      filmDetail(currentFilm,this.onFinish);
  }
  
  render() {
    if(this.state.filmDetails!==null){
        return <FilmDetails film={this.state.filmDetails} />
    }
    return (<ScrollView style={{backgroundColor:'black',flex:1}}>
    <Text style={{fontSize:17,color:"A19F9F"}}>Loading</Text>
    </ScrollView>)
    
  }

}