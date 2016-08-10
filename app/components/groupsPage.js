/**
 * Created by perandre on 10.08.16.
 */

import React, {Component} from 'react';
import {View, Text, ListView, ToolbarAndroid, StyleSheet} from 'react-native';
import ToolBar from './toolBar';
import GroupsList from './groupsList';

class GroupsPage extends Component {
    render() {
        return (
            <View>
                <ToolBar title="Groups"/>
                <GroupsList _navigate={this.props._navigate}
                            _navigateBack={this.props._navigateBack}/>
            </View>
        )
    }
}

export default GroupsPage