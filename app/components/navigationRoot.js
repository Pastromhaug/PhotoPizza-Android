/**
 * Created by perandre on 05.08.16.
 */

import React, { Component } from 'react'
import Home from './home'
import About from './about'
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
        this._renderScene = this._renderScene.bind(this)
        this._handleBackAction = this._handleBackAction.bind(this)
    }
    componentDidMount () {
        BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
    }
    componentWillUnmount () {
        BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
    }
    _renderScene (props) {
        const { route } = props.scene;
        switch(route.key) {
            case 'home':
                return <Home _handleNavigate={this._handleNavigate.bind(this)} />;
            case 'about':
                return <About _goBack={this._handleBackAction.bind(this)} />;
            case 'login':
                return <LoginScreen _handleNavigate={this._handleNavigate.bind(this)}/>
        }
    }
    _handleBackAction () {
        if (this.props.navigation.index === 0) {
            return false
        }
        this.props.dispatchPop()
        return true
    }
    _handleNavigate (action) {
        switch (action.type) {
            case 'push':
                this.props.dispatchPush(action.route);
                return true;
            case 'back':
            case 'pop':
                return this._handleBackAction();
            default:
                return false
        }
    }
    render () {
        return (
            <NavigationCardStack
                direction='vertical'
                navigationState={this.props.navigation}
                onNavigate={this._handleNavigate.bind(this)}
                renderScene={this._renderScene} />
        )
    }
}


import { connect } from 'react-redux'
import { actionPush, actionPop } from '../actions/navigation';

function mapStateToProps (state) {
    return {
        navigation: state.navigation
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