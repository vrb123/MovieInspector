import React from 'react'
import {Button,TextInput,Text,ScrollView,StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    formBlock:{
        backgroundColor:"black",
        padding:10,
        
    },
    form:{
        color:"white",
        height:30,
        marginLeft:10
        
    }
})

export default class SearchForm extends React.Component {

    state={
        searchText:""
    }

    componentDidUpdate(){
        this.props.onChange(this.state.searchText);
    }

    shouldComponentUpdate(prevProps,prevState){
        if(prevState.searchText===this.state.searchText){
            return false;
        }
        return true;
    }

    handleSearchTextChange=(searchText)=>{
        this.setState({searchText});
    }

    render(){
        return (
            <ScrollView style={styles.formBlock}>
                <TextInput style={styles.form} value={this.props.searchText} onChangeText={this.handleSearchTextChange} placeholder="Search film..." />
            </ScrollView>
        )
    }
}