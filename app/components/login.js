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
} = FBSDK;

import {loginAndGoToGroups} from '../js/loginLogic';

class _Login extends Component{
    render() {
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
                                let navigateToGroups = () => props._navigate('push','groups');
                                let navigateToLogin = () => props._navigate('push','login');
                                loginAndGoToGroups(props.dispatchUpdateAuth, navigateToGroups, navigateToLogin);
                            }
                        }
                    }/>
            </View>
        );
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

const Login = connect (
    mapStateToProps,
    mapDispatchToProps
)(_Login);

export default class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
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
        backgroundColor: '#F5FCFF'
    }
});
