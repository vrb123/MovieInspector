import {AsyncStorage} from 'react-native'
import DefaultSettings from '../SettingsDefault'
import SettingRow  from '../entities/SettingRow'
import React from 'react'

export default class AppSettings {

    static getItem=async (key,callback)=>{
        let value=await AsyncStorage.getItem(key);
        if(value===null){
            value=DefaultSettings[key].value;
        }
        callback(key,value.toString());
        return value;
    }

    static setItem=(key,value)=>{
        AsyncStorage.setItem(key,value)
    }


}