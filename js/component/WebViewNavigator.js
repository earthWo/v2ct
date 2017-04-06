/**
 * Created by wuzefeng on 2017/1/4.
 */

import React ,{Component} from 'react';

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
}from 'react-native';

import new_scene from '../scene/NewScene';


export default class WebViewNavigator extends Component{




    // 构造
      constructor(props) {
        super(props);
        // 初始状态

      }




      render(){

         const {userInfo, onPress} = this.props;
         return(
          <View style={Style.root}>
              <TouchableOpacity onPress={onPress}>
              <Image style={Style.image} source={require('../image/back.png')} >
              </Image>
          </TouchableOpacity>

              <TouchableOpacity style={ {flexDirection:'row', alignItems:'center',}} activeOpacity={0.9} onPress={this._userClick.bind(this,userInfo)}>

                  <Image style={Style.image} source={{uri:userInfo.avatar_normal}}></Image>
                  <Text style={Style.name}>{userInfo.username}</Text>

              </TouchableOpacity>

          </View>

            );

      }


      _userClick(userInfo){

          new_scene.switchToUserPage(userInfo)

      }


}


var Style=StyleSheet.create({

    root:{
        backgroundColor:'#000',
        flexDirection:'row',
        height:50,
        alignItems:'center',
    },

    image:{
        height:30,
        width:30,
        marginLeft:8

    },

    name:{
        color:'#fff',
        marginLeft:5

    }

});
