/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View, Text, ListView, ToolbarAndroid, StyleSheet} from 'react-native';

export default class Groups extends Component {
    constructor() {
        super();
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => this._rowHasChanged(r1, r2)
        });
        this.state = {
            dataSource: dataSource.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    _rowHasChanged(r1, r2){
        return r1 !== r2;
    }

    _renderRow(rowData) {
        return <Text>{rowData}</Text>
    }
    
    render() {
        const toolBarStye = {height:56,backgroundColor: "rgb(97,71,158)"};
        return (
            <View styoe={{alignItems:'stretch'}}>
                <ToolbarAndroid title="Groups" titleColor='#e6e6e6' style={toolBarStye}/>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData) => this._renderRow(rowData)}/>
            </View>
        )
    }


}

