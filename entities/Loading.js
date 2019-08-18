import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    block:{
        flex:1,
        backgroundColor:"black"
    },
    text:{
        fontSize:17,
        fontFamily:"Roboto",
        color:"white"
    }
})

export default class Loading extends React.Component {
    render(){
        return (
            <View style={styles.block}>
                <Text style={styles.text}>Loading ...</Text>
            </View>
        )    
    }
}