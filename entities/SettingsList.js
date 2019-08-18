import React from 'react'
import {ScrollView,Text,View,StyleSheet} from 'react-native'
import AppSettings from '../settings/AppSettings'
import SettingRow from './SettingRow'
import Loading from './Loading'

const styles=StyleSheet.create({
    block:{
        flex:1,
        backgroundColor:"black",
        padding:7
    }
})

export default class SettingsList extends React.Component {

    state={
        settings:{},
        isReady:false,
        settingsValues:{}
    }

    /*
        Callback on each form to change
    */
    onChange=(key,value)=>{
        const newSettings=Object.assign(this.props.settings);
        newSettings[key]=value.toString();
        this.setState( {
            settings: newSettings
        } )
    }

    /*
        Callback on componentDidMount
    */
    appendSettingValue=(key,value)=>{
        const newSettingsValues=Object.assign(this.state.settingsValues);
        newSettingsValues[key]=value;
        this.setState( {
            settingsValues: newSettingsValues,
        } )
    }

    /*
        If state.isReady is already true return, otherwise check whether length of Settings value and Setting options are equal
    */
    componentWillUpdate(){
        if(this.state.isReady) return;
        if(Object.keys(this.state.settingsValues).length === Object.keys(this.props.settings).length  ){
            this.setState({isReady:true});
        }
    }

    /*
        If component has been updated we send current setting object state and update our Settings
    */
    componentDidUpdate(){
            this.props.onChangeSettings(this.state.settings);
    }

    /*
        For each key we get value from AsyncStorage and append to state settingsValues
    */
    componentDidMount(){
        Object.keys(this.props.settings).map(key=>AppSettings.getItem(key,this.appendSettingValue))
    }

    render(){
        if(this.state.isReady==false){
            return (
                <Loading />
            )
        }
        return (
            <ScrollView style={styles.block}>
                {Object.keys(this.props.settings).map(key=>{
                    const item=this.props.settings[key];
                    const value=this.state.settingsValues[key].toString();
                    return <SettingRow onChange={this.onChange} name={key} type={item.type} maxLength={item.maxLength} value={value} />
                }
                )}
            </ScrollView>
        )
    }

}

