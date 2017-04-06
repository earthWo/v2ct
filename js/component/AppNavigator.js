/**
 * Created by wuzefeng on 2017/1/4.
 */

import React ,{Component} from 'react';

import {
    Navigator
}from 'react-native';

import Scene from '../scene/NewScene'
import SplashScreen from '../mould/SplashScreen';

export default class Navigation extends Component{


    componentDidMount() {
        SplashScreen.dismiss();
    }

    render(){
        return(
            <Navigator
                initialRoute={{component:Scene}}
                renderScene={(route,navigator)=>{
                    return<route.component navigator={navigator}{...route.args}/>
                    }}>
            </Navigator>
        );
    }
}