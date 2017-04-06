/**
 * Created by wuzefeng on 2017/1/4.
 */
'use strict'

import React , {Component} from 'react';

import {
    BackAndroid
} from 'react-native';

export default class BackComponent extends Component{

// 构造
  constructor(props) {
    super(props);
    // 初始状态
   this._handleBack=this._handleBack.bind(this);
  }

    componentDidMount() {
        BackAndroid.addEventListener('hardWareBackPress',this._handleBack);
    }

    componentWillUnMount() {
        BackAndroid.removeEventListener('hardWareBackPress',this._handleBack);
    }


    _handleBack(){
        this.props.navigator.pop();
        return true;
    }
}