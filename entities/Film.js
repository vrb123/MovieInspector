import React from 'react'
import {Image,Button,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {capitalize,trimToFixedString} from '../helperFunctions'
import ImageWithDefault from './ImageWithDefault'
import ApplicationSettings from '../settings/AppSettings'

const styles=StyleSheet.create({
  block:{
    justifyContent: 'center',
    alignItems: 'center',
    padding:15,
    backgroundColor:'black',
    width:"50%",
    flex:1

  },
  poster:{
      width: 120, height: 120
  },
  centered:{
    
  },
  titleText:{
    color:"white",
    fontFamily:"Roboto",
    fontSize:18
  },
  text:{
    color:"#A19F9F",
    fontFamily:"Roboto",
    fontSize:12
  }
})

export default class Film extends React.Component{

  onFilmPress=()=>{
    this.props.onFilmClicked(this.props.film);
  }

  state={
    titleLength:0
  }

  setTitleLength=(key,length)=>{
    this.setState({titleLength:length});
  }

  componentWillMount(){
    ApplicationSettings.getItem('Title Length',this.setTitleLength);
  }

  render(){
    const film=this.props.film;
    return (
        <TouchableOpacity
        style={styles.block}
        onPress={()=>this.onFilmPress()}
        >
        <ImageWithDefault
          style={styles.poster}
          source={{uri: film.Poster}}
        />
        <Text style={styles.titleText}>{trimToFixedString(film.Title,this.state.titleLength)}</Text>
        <Text style={styles.text}>{film.Year}</Text>
        <Text style={styles.text}>{capitalize(film.Type)}</Text>

        </TouchableOpacity>
    )
  }
}