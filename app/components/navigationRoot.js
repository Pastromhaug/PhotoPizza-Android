/**
 * Created by perandre on 05.08.16.
 */

import React, { Component } from 'react';
import LoadingOnAppOpen from './loadingOnAppOpen';
import Home from './home'
import About from './about'
import GroupsPage from './groupsPage';
import GroupImages from './groupImages';
import LoginScreen from './login';

import {
    BackAndroid,
    NavigationExperimental
} from 'react-native'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental;


class _NavigationRoot extends Component {
    constructor (props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        this._navigate = this._navigate.bind(this);
        this._navigateBack = this._navigateBack.bind(this);

    }
    componentDidMount () {
        BackAndroid.addEventListener('hardwareBackPress', this._navigateBack)
    }

    componentWillUnmount () {
        BackAndroid.removeEventListener('hardwareBackPress', this._navigateBack)
    }


    _renderScene (props) {
        const { route } = props.scene;
        console.log('route');
        console.log(route);
        switch(route.key) {
            case 'loading':
                return <LoadingOnAppOpen _navigate={this._navigate}/>
            case 'home':
                return <Home _navigate={this._navigate} />;
            case 'about':
                return <About _navigateBack={this._navigateBack} />;
            case 'login':
                return <LoginScreen _navigate={this._navigate}/>
            case 'groups':
                return <GroupsPage _navigateBack={this._navigateBack}
                                   _navigate={this._navigate}/>
            case 'groupImages':
                return <GroupImages _navigateBack={this._navigateBack}
                                    _navigate={this._navigate}
                                    groupName={route.groupName}/>
        }
    }
    _navigateBack () {
        if (this.props.navigation.index === 0) {
            return false
        }
        this.props.dispatchPop();
        return true
    }
    _navigate (type, routeName, extras = {}) {
        const route = Object.assign({},{key: routeName}, extras);
        switch (type) {
            case 'push':
                this.props.dispatchPush(route);
                return true;
            case 'back':
            case 'pop':
                return this._navigateBack();
            default:
                return false
        }
    }
    render () {
        return (
            <NavigationCardStack
                direction="horizontal"
                onNavigateBack={this._navigateBack}
                navigationState={this.props.navigation}
                onNavigate={this._navigate.bind(this)}
                renderScene={this._renderScene} />
        )
    }
}


import { connect } from 'react-redux'
import { actionPush, actionPop } from '../actions/navigation'

function mapStateToProps (state) {
    return {
        navigation: state.navigation,
        facebookToken: state.auth.facebookToken
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchPush: (route) => dispatch(actionPush(route)),
        dispatchPop: () => dispatch(actionPop())
    }
}

const NavigationRoot = connect(
    mapStateToProps,
    mapDispatchToProps
)(_NavigationRoot);

export default NavigationRoot;