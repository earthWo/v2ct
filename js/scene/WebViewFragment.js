/**
 * Created by wuzefeng on 2017/1/4.
 */


import React ,{ Component} from 'react' ;

import {
    View,
    WebView,
    ToastAndroid
}from 'react-native';

import BackComponent from './BackComponent';

import WebViewNavigator from '../component/WebViewNavigator';

export default class WebViewFragment extends BackComponent{


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render(){
        return(
            <View  style={ {flexDirection:'column',flex: 1}}>
                <WebViewNavigator userInfo={this.props.rowData.member} onPress={this._handleBack.bind(this)}></WebViewNavigator>

                <WebView style={{flex: 1}} source={{uri:this.props.rowData.url}} startInLoadingState={true}
                />
            </View>

        );
    }
}