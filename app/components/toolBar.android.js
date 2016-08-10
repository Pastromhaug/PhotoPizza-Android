/**
 * Created by perandre on 10.08.16.
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ToolBar extends Component {
    render() {
        const toolBarStye = {height:56,
            backgroundColor: "rgb(97,71,158)",
            elevation:5
        };
        return (
            <View>
                <Icon.ToolbarAndroid title={this.props.title} titleColor='#e6e6e6' style={toolBarStye}/>
            </View>
        )
    }
}