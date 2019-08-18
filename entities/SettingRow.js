import React from 'react'
import {ScrollView,TextInput,Text,View,StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    block:{
        flexDirection:"row",
        alignItems:"flex-start",
        flexWrap:'wrap',
        backgroundColor:"black",
        flex:1,
        padding:4
        
    },
    form:{
        color:"white",
        fontSize:15
    },
    settingName:{
        color:"#A19F9F",
        marginLeft:5,
        fontSize:17,
        fontFamily:"Roboto"
    }
})

export default class SettingRow extends React.Component {

    state={
        value:this.props.value.toString(),
    }

    numericSetting=()=>this.props.type==='number';

    handleValueChanged=(value)=>{
        const allowedSymbols=(this.numericSetting())?"0123456789":null;
        if(allowedSymbols!==null){
            value=value.split('').filter(c=>allowedSymbols.indexOf(c)!=-1).join('');
        }
        console.log(value);
        this.setState({value:value.substring(0,this.props.maxLength)});
    }

    shouldComponentUpdate(prevProps,prevState){
        if(prevState.value===this.state.value && this.props.value.length>0){
            return false;
        }
        return true;
    }

    componentDidUpdate(){
        this.props.onChange(this.props.name,this.state.value);
    }


    render(){
        return (
            <View style={styles.block}>
                <Text style={styles.settingName}>{this.props.name} : </Text>
                <TextInput containerStyle={{flexGrow: 1}} style={styles.form} type={this.numericSetting()?"numeric":""} value={this.state.value} onChangeText={this.handleValueChanged} />
            </View>
        )
    }

}