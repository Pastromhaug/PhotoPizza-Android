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

const About = ({_navigateBack}) => (
    <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Button onPress={_navigateBack} label='Go Back' />
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
});

export default About