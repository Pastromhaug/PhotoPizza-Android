/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import GroupListItem from './groupListItem';
import FIREBASE from '../js/firebase';

class _GroupsList extends Component {
    constructor(props) {
        super(props);
        this._rowHasChanged.bind(this);
        this._renderRow.bind(this);
        this.ds = new ListView.DataSource( {
            rowHasChanged: this._rowHasChanged
        });
        this.groupsRef = FIREBASE.database().ref('users/' + props.auth.firebaseToken + '/groups');
        this.groupsRef.on('value', (snapshot) => {
            let groupIds = Object.values(snapshot.val());
            props.dispatchUpdateGroupIds(groupIds);
        });
    }

    _rowHasChanged(r1, r2){
        return r1 !== r2;
    }

    _renderRow(rowData) {
        return <GroupListItem groupId={rowData}
                              _navigateBack={this.props._navigateBack}
                              _navigate={this.props._navigate}/>
    }
    
    render() {
        let dataSource = this.ds.cloneWithRows(this.props.groupIds);
        return (
            <View style={{flex:1}}>
                <ListView dataSource={dataSource}
                          renderRow={this._renderRow.bind(this)}
                          enableEmptySections={true}/>
            </View>
        )
    }
}

import {connect} from 'react-redux';
import {actionUpdateGroupIds} from '../actions/groupsList';

function mapStateToProps(state) {
    return {
        auth: state.auth,
        groupIds: state.groupsList.groupIds
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchUpdateGroupIds(groupIds) {
            dispatch(actionUpdateGroupIds(groupIds))
        }
    }
}

const GroupsList = connect (
    mapStateToProps,
    mapDispatchToProps
)(_GroupsList);

export default GroupsList
