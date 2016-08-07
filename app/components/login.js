/**
 * Created by perandre on 05.08.16.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    AccessToken
} = FBSDK;

import FIREBASE from '../js/firebase';
import * as firebase from 'firebase';
const auth = firebase.auth();
const provider = firebase.auth.FacebookAuthProvider;

class _Login extends Component{
    render() {
        var accessToken = AccessToken.getCurrentAccessToken().then( (data) => {
            console.log('accessToken: ');
            console.log(data);
            console.log(data.accessToken);
            if (accessToken != null) {
                console.log('navigating to next screen');
                this.props.dispatchFacebookToken(data.accessToken);
                this.props._navigateToGroups();
            }
        });

        return (
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
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
                                        }
                                    }).catch(
                                    () => {
                                        console.log('accesstoken not caught') ;
                                    }
                                )
                            }
                        }
                    }/>
            </View>
        );
    }
};

import {connect} from 'react-redux';
import {actionFacebookToken} from '../actions/auth'

function mapStateToProps() {return {}};
function mapDispatchToProps(disptach) {
    return {
        dispatchFacebookToken(token) {
            disptach(actionFacebookToken(token));
        }
    }
}

const Login = connect (
    mapStateToProps,
    mapDispatchToProps
)(_Login);

export default class LoginScreen extends Component {

    render() {
        const nextRoute = {
            type: 'push',
            route: {
                key: 'groups',
                title: 'Home'
            }
        };
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native! fdjksal;
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Login _navigate={this.props._navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
