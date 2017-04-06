/**
 * Created by wuzefeng on 2017/1/4.
 */
import React from 'react';

import {
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    View,
    ToastAndroid

}from 'react-native';

import BackComment from './BackComponent';

export default class UserPage extends BackComment{


    // 构造
      constructor(props) {
          super(props);
          // 初始状态
          this.state = {
              user: props.userInfo
          }

      }


      render(){

          return(
              <View>
                  <View style={Style.root}>
                  <TouchableOpacity onPress={this._handleBack.bind(this)}>
                      <Image style={Style.image} source={require('../image/back.png')} />
                  </TouchableOpacity>
                  </View>


                  <View style={{flexDirection:'row'}}>

                      <Image style={Style.header} source={{uri:this.state.user.avatar_large}}></Image>


                      <View style={{flexDirection:'column'}}>

                          <Text style={Style.name}>{this.state.user.username}</Text>

                          <Text style={Style.tagline}>{this.state.user.tagline}</Text>
                      </View>

                  </View>

                  <Text style={Style.name}>{this.state.user.bio}</Text>


                  <Text style={Style.name}>个人主页：{this.state.user.website}</Text>


                  <Text style={Style.name}>twitter：{this.state.user.twitter}</Text>


                  <Text style={Style.name}>psn：{this.state.user.psn}</Text>


                  <Text style={Style.name}>github：{this.state.user.github}</Text>


                  <Text style={Style.name}>bio：{this.state.user.bio}</Text>
              </View>
          );
      }


    componentDidMount() {
        this._getUserInfo();
    }



      _getUserInfo(){

          let url='https://www.v2ex.com/api/members/show.json?id='+this.props.userInfo.id;

          fetch(url)
              .then((response)=>response.json())
              .then((json)=>{


                 let member ={
                     id:json.id,
                     username:json.username,
                     tagline:json.tagline,
                     avatar_mini:'http://'+json.avatar_mini,
                     avatar_normal:'http://'+json.avatar_normal,
                     avatar_large:'http://'+json.avatar_large,
                     url:json.url,
                     website:json.website,
                     twitter:json.twitter,
                     psn:json.psn,
                     github:json.github,
                     btc:json.btc,
                     bio:json.bio,
                  };

                 this.setState({
                     user:member
                 });

              })
              .done();

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
        marginLeft:5,
        fontSize:20,
        marginTop:20

    },

    tagline:{
        marginLeft:5,
        fontSize:15,
        marginTop:10

    },

    header:{
        height:70,
        width:70,
        margin:15

    },

});