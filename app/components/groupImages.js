/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class GroupImages extends Component {
    render() {
        const toolBarStye = {height:56,
            backgroundColor: "rgb(97,71,158)",
            elevation:5
        };
        return (
            <View style={{flex:1}}>
                <Icon.ToolbarAndroid navIconName="md-arrow-back"
                                     onIconClicked={this.props._navigateBack}
                                     title={this.props.groupName}
                                     titleColor='#e6e6e6' style={toolBarStye}/>
            </View>
        )
    }
}