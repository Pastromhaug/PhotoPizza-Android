/**
 * Created by perandre on 06.08.16.
 */

import React, {Component} from 'react';
import {View} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    AccessToken
} = FBSDK;


import FIREBASE from '../js/firebase';
import * as firebase from 'firebase';
const auth = firebase.auth();
const provider = firebase.auth.FacebookAuthProvider;

export default class LoadingOnAppOpen extends Component {
    constructor(props) {
        super(props);
        console.log('LoadingAppOnOpen constructor');
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data.accessToken != null){
                    console.log('accesstoken caught');
                    const credential = provider.credential(data.accessToken);
                    auth.signInWithCredential(credential)
                        .then( (result) => {
                            console.log('signed in with firebase');
                            console.log(result);
                            this.props._navigate('push','groups',{firDatabase:FIREBASE.database()});
                        })
                        .catch((error) => {
                            console.log('firebase sign in error');
                            console.log(error);
                        });
                }
                else {
                    console.log('accesstoken caught, but is null') ;
                    this.props._navigate('push','login');
                }
            }).catch( 
            () => {
                console.log('accesstoken not caught') ;
                this.props._navigate('push','login');
            }
        )
        
    }

    render() {
        return (
            <View/>
        )
    }
}
