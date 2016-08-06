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

class Login extends Component{
    render() {
        const loggedInView = {
            type: 'push',
            route: {
                key: 'groups',
                title: 'Home'
            }
        };
        var accessToken = AccessToken.getCurrentAccessToken().then( (data) => {
            console.log('accessToken: ');
            console.log(data);
            if (accessToken != null) {
                console.log('navigating to next screen');
                this._navigate(loggedInView);
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
                                        this.props.navigateToGroups();
                                    }
                                )
                            }
                        }
                    }/>
            </View>
        );
    }
};

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
                <Login navigateToNext={() => this.props._navigate(nextRoute)}/>
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
