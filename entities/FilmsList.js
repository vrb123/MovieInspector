import React from 'react'
import {FlatList,ScrollView,Text,StyleSheet,Button} from 'react-native'
import Film from './Film'
import AppSettings from '../settings/AppSettings'

export default class FilmsList extends React.Component{
  
  state={
    numFilmsLoaded:0,
    updateConstant:0,
    numColumnsGrid:0,
    loaded:false
  }

  updateNumFilmsPreloaded=(key,value)=>{
    value=Number(value);
    this.setState({
      numFilmsLoaded:value,
      updateConstant:value
    })
  }

  updateNumColumnsGrid=(key,value)=>{
    value=Number(value);
    this.setState({
      numColumnsGrid:value,
      loaded:true
    })
  }

  getNumFilmsPreloaded=()=>{
    AppSettings.getItem('Pre-render films',this.updateNumFilmsPreloaded);
  }

  getNumColumnsGrid=()=>{
    AppSettings.getItem('Number of columns grid',this.updateNumColumnsGrid);
  }

  componentWillMount(){
    this.getNumFilmsPreloaded()
    this.getNumColumnsGrid();
  }

  /*
      If current number of films loaded + constantPreload lower than size of array ,then add + const
      Otherwise load all films 
  */
  loadMore=()=>{
    const canLoadConstant=(this.state.numFilmsLoaded+this.state.updateConstant)<=(this.props.films.length-1);
    canLoadConstant ? 
          this.setState(prevState=>({numFilmsLoaded:this.state.numFilmsLoaded+this.state.updateConstant}))
          :
          this.setState({numFilmsLoaded:this.props.films.length-1})
  }

  canLoadMore=()=>(
    this.state.numFilmsLoaded<this.props.films.length-1
  )

  onSingleFilmClicked=(film)=>{
      this.props.onSingleFilmClicked(film);
  }

  renderFilm=({item})=>(
    <Film film={item} onFilmClicked={this.onSingleFilmClicked} />
  )

  render(){
    if(this.state.loaded==false){
      return (
        <ScrollView>
        </ScrollView>
      )
    }
    return (
      <ScrollView >
          <FlatList
          numColumns={this.state.numColumnsGrid}
          renderItem={this.renderFilm}
          keyExtractor={(item, index) => String(index)+String(this.state.numColumnsGrid)}
          data={this.props.films.slice(0,this.state.numFilmsLoaded)} 
          />
          {this.canLoadMore() && <Button color="#A19F9F" onPress={this.loadMore} title="Load more..." />}
      </ScrollView>
    )
  }

}