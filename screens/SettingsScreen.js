import React from 'react'
import SettingsDefault from '../SettingsDefault'
import SettingsList from '../entities/SettingsList'
import AppSettings from '../settings/AppSettings'

export default class SettingsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: "Settings",
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#A19F9F',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        };
    };

    settingsSaved=(newSettings)=>{
        Object.keys(newSettings).map(key=>{
            AppSettings.setItem(key,newSettings[key]);
        })
    }

    render(){
        return (
            <SettingsList settings={SettingsDefault} onChangeSettings={this.settingsSaved} />
        )
    }

}