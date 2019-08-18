import React from 'react'
import {ScrollView,Button,Text,StyleSheet} from 'react-native'
import {searchFilmsByTitle} from '../api'
import SearchForm from '../entities/SearchForm'
import FilmsList from '../entities/FilmsList'

const styles=StyleSheet.create({
    block:{
        // flex:1,
        // height:"100%",
        backgroundColor:"black"
    }
})


export default class SearchFilmScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: "Search",
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
        searchResult:[]
    }

    onSuccessSearch=(data)=>{
        this.setState({
            searchResult:data.Search
        })
    }

    onFailSearch=()=>{
        this.setState({
            searchResult:[]
        })
    }

    onSingleFilmClicked=(film)=>{
        this.props.navigation.navigate('ViewSingleFilmDetailsScreen',{film})
    }

    updateSearch=(text)=>{
        searchFilmsByTitle(text,this.onSuccessSearch,this.onFailSearch);
    }

    shouldShowSearchResult=()=>{
        return this.state.searchResult.length>0;
    }
    

    render(){
        return (
            <ScrollView style={styles.block}>
                <SearchForm onChange={this.updateSearch} />

                <FilmsList films={this.state.searchResult} onSingleFilmClicked={this.onSingleFilmClicked}  />
            </ScrollView>
        )
    }

}