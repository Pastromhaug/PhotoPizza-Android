/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    AccessToken
} = FBSDK;

export default class LoadingOnAppOpen extends Component {
    constructor(props) {
        super(props);
        console.log('LoadingAppOnOpen constructor');
        AccessToken.getCurrentAccessToken().then(
            () => {
                console.log('accesstoken caught');
                this.props._navigateToGroups();
            }).catch( 
            () => {
                console.log('accesstoken not caught') ;
                this.props._navigateToLogin();
            }
        )
        
    }

    render() {
        return (
            <View/>
        )
    }
}
