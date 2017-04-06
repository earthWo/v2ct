/**
 * Created by wuzefeng on 2016/12/18.
 */
import React,{Component} from 'react';
import {
    ToastAndroid
}from 'react-native';

import Tabbar from '../component/Tabbar';

import WebViewFragment from '../scene/WebViewFragment';
import UserPage from '../scene/UserPage';


export default class Scene extends Component{


    constructor(props){
        super(props);
        Scene.switchToWebViewPage = Scene.switchToWebViewPage.bind(this);
        Scene.switchToUserPage = Scene.switchToUserPage.bind(this);
    }



    static switchToWebViewPage(rowData){

        this.props.navigator.push({
            component: WebViewFragment,
            args: {rowData: rowData}
        });
    }

    static switchToUserPage(userInfo){

        this.props.navigator.push({
            component: UserPage,
            args: {userInfo: userInfo}
        });
    }


    render(){
        return(<Tabbar/>);
    }

}
