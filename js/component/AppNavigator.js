/**
 * Created by wuzefeng on 2017/1/4.
 */

import React ,{Component} from 'react';

import {
    Navigator,
    Platform
}from 'react-native';

import Scene from '../scene/NewScene'
import SplashScreen from '../mould/SplashScreen';

export default class Navigation extends Component{


    componentDidMount() {
        if(Platform.OS=="android"){
            SplashScreen.dismiss();
        }
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