/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View, TouchableHighlight, Text, Image} from 'react-native';

export default class GroupListItem extends Component {
    render(){
        return (
            <TouchableHighlight underlayColor="#d9d9d9"
                                onPress={()=> this.props._navigate('push','groupImages',{groupName:this.props.groupName})}>
                <View style={{flex:1,flexDirection:'row',
                            borderBottomColor:'#cccccc', borderBottomWidth:1}}
                      onClick={() => {
                        console.log('clicked');
                        this.props._navigate('push','groupImages')
                      }}>
                    <Image style={{width:70, height:70}}
                           source={require("../images/nice.jpg")}/>
                    <View style={{flex:1,flexDirection:'column',
                          justifyContent:'space-around', padding:5, paddingLeft:10}}>
                        <Text style={{fontSize:16,height:25,color:'#404040'}}>{this.props.groupName}</Text>
                        <Text style={{fontSize:12}}>{this.props.groupDescription}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}