import React from 'react'
import { AppRegistry } from 'react-native'

import configureStore from './app/store/configureStore'
const store = configureStore();

import NavigationRoot from './app/components/navigationRoot';
import { Provider } from 'react-redux'

const App = () => (
    <Provider store={store}>
        <NavigationRoot/>
    </Provider>
);
AppRegistry.registerComponent('PhotoPizza', () => App);