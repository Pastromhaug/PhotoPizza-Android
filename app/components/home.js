/**
 * Created by perandre on 05.08.16.
 */

import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Button from './button'

const route = {
    type: 'push',
    route: {
        key: 'about',
        title: 'About'
    }
};

const Home = ({_handleNavigate}) => (
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Button onPress={() => _handleNavigate(route)} label='Go To About' />
    </View>
)

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 22,
        textAlign: 'center'
    },
    container: {
        paddingTop: 60
    }
})

export default Home