import React from 'react'
import {ScrollView,Text,StyleSheet,View} from 'react-native'
import {capitalize} from '../helperFunctions'
import ImageWithDefault from './ImageWithDefault'

const styles=StyleSheet.create({
  block:{
    backgroundColor:"black",
    padding:4
  },
  centered:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  titleText:{
    fontSize:20,
    fontFamily:"Roboto",
    paddingVertical:20,
    color:"green"
  },
  attrName:{
    color:"#A19F9F",
    fontSize:17,
    fontFamily:"Roboto"
  },
  poster:{
      width:150,
      height:150,
      marginTop:20,
      marginBottom:50
  },
  attrValue:{
    color:"white",
    fontSize:15
  },
  row:{
    marginVertical:3
  }
})

export default class FilmDetails extends React.Component {

  static displayConfition=(key,value)=>FilmDetails.notSupposedToBeIterated.indexOf(key)===-1 && (typeof value != 'object' ) && (value !== 'N/A')

  static notSupposedToBeIterated=['Title','Poster','imdbID','Response']; // not displayed properties

  render(){

    const filmDetails=this.props.film;
    
    return(
      <ScrollView style={styles.block}>

        <View style={styles.centered}>
            <ImageWithDefault
              style={styles.poster}
              source={{uri: filmDetails.Poster}}
            />
        </View>

        {Object.keys(filmDetails).map(k=>{
            if(FilmDetails.displayConfition(k,filmDetails[k]))
              return (
                <Text style={styles.row}> 
                    <Text style={styles.attrName}>{capitalize(k)} : </Text>
                    <Text style={styles.attrValue}>{capitalize(filmDetails[k])}</Text>
                </Text>
              )
        })}

      </ScrollView>

    )
  }

}

 