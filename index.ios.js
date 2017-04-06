/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Navigation from './js/component/AppNavigator';


export default class v2ct extends Component {
    render() {
        return (
            <Navigation/>
        );
    }
}



AppRegistry.registerComponent('v2ct', () => v2ct);
