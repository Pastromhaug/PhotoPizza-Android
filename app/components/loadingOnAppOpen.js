/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import {loginAndGoToGroups} from '../js/loginLogic';

class _LoadingOnAppOpen extends Component {
    constructor(props) {
        super(props);
        let navigateToGroups = () => props._navigate('push','groups');
        let navigateToLogin = () => props._navigate('push','login');
        loginAndGoToGroups(props.dispatchUpdateAuth, navigateToGroups, navigateToLogin);
    }

    render() {
        return (
            <View/>
        )
    }
}
import {connect} from 'react-redux';
import {actionUpdateAuth} from '../actions/auth';

function mapStateToProps() {return {}}
function mapDispatchToProps(disptach) {
    return {
        dispatchUpdateAuth(facebookToken,firebaseToken) {
            disptach(actionUpdateAuth(facebookToken, firebaseToken));
        }
    }
}

const LoadingOnAppOpen =  connect (
    mapStateToProps,
    mapDispatchToProps
)(_LoadingOnAppOpen);

export default LoadingOnAppOpen;
