/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View, Text, ListView, ToolbarAndroid, StyleSheet} from 'react-native';
import GroupListItem from './groupListItem';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Groups extends Component {
    constructor() {
        super();
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => this._rowHasChanged(r1, r2)
        });
        this.state = {
            dataSource: dataSource.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Per Andre','Kari','Devin',
                'Johannes'
            ])
        };
    }

    _rowHasChanged(r1, r2){
        return r1 !== r2;
    }

    _renderRow(rowData) {
        return <GroupListItem groupName={rowData} groupDescription={rowData}_
                              _navigateBack={this.props._navigateBack}
                              _navigate={this.props._navigate}/>
    }
    
    render() {
        const toolBarStye = {height:56,
            backgroundColor: "rgb(97,71,158)",
            elevation:5
        };
        return (
            <View style={{flex:1}}>
                <Icon.ToolbarAndroid title="Groups" titleColor='#e6e6e6' style={toolBarStye}/>
                <ListView style={{}}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => this._renderRow(rowData)}/>
            </View>
        )
    }


}

