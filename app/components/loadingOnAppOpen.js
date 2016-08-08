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

class _LoadingOnAppOpen extends Component {
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
                            this.props.dispatchUpdateAuth(data.accessToken, result.uid);
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
