import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback,Image} from 'react-native';
import Perference from '../Perference';
import {Setting} from '../styles/styles'

import { useDispatch } from 'react-redux';
import { LoginRequestAction } from '../reducers/user';


export default class MainComponent extends Component{
    
 
    constructor(){
        super();
        this.state={
            datas3: Perference.getUsers()
        };
    }
 
    render(){
        this.state.datas3.forEach( (element,index)=>{
            element=index; 
        });
 
        return(
            <View style={{flex:1, padding:16,}}>      
                <FlatList
                    data={this.state.datas3} //대량의 데이터
                    renderItem={this.renderItem} //adapter
                    keyExtractor={item=>item} //keyExtractor={ (item)=>{return item.name; }}
                    >
                </FlatList>
            </View>
        );
    }//render
 
    renderItem = ({item})=>{

        return  <Setting.btnWrap>
                <TouchableOpacity onPress={ ()=>{
                     // dispatch(LoginRequestAction({userEmail:user,TodayConvert:converttoday}));
                }}>
                <Setting.btnStyle>
                <Setting.Text>{item}</Setting.Text>
                 </Setting.btnStyle>
                </TouchableOpacity>
                </Setting.btnWrap>
    }
}
 

