/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View, TouchableHighlight, Text, Image} from 'react-native';
import FIREBASE from '../js/firebase';

export default class GroupListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            update: "",
            imageSrc: ""
        }
        let groupRef = FIREBASE.database().ref('groups/' + props.groupId);
        groupRef.on('value', (snapshot) => {
            let groupProps = snapshot.val();
            this.setState({
                name: groupProps.groupName,
                update: groupProps.update,
                imageSrc: groupProps.avatarImgId
            })
        } )
    }

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
                        <Text style={{fontSize:16,height:25,color:'#404040'}}>{this.state.name}</Text>
                        <Text style={{fontSize:12}}>{this.state.update}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}