/**
 * Created by wuzefeng on 2017/1/3.
 */

'use strict';
import React , { Component } from 'react' ;

import {
    ListView,
    Text,
    View,
    ToastAndroid,
    TouchableNativeFeedback,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';


import new_scene from '../scene/NewScene';

import getTimeBefore from '../util/timeUtil' ;


export default class NormalListView extends Component{


    // 构造
      constructor(props) {
        super(props);


        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

          // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(this.props.contents)
        };
      }

      render(){
          return(
              <View>
                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderItem.bind(this)}
                  />
              </View>
          );
      }

      _renderItem(rowData){
          if(Platform.OS==='ios'){
              return(
                  <TouchableOpacity onPress={this._itemClick.bind(this,rowData)}>
                      {this._renderItemContain(rowData)}
                  </TouchableOpacity>
              );
          }else{
              return(
                  <TouchableNativeFeedback  onPress={this._itemClick.bind(this,rowData)}>
                      {this._renderItemContain(rowData)}
                  </TouchableNativeFeedback>
              );
          }
      }


    /**
     * 点击进入帖子详情
     * @param rowData
     * @private
     */
    _itemClick(rowData){
        new_scene.switchToWebViewPage(rowData);
    }


    _renderItemContain(rowData){
        return(

            <View style={{flexDirection:'column',flex: 1}}>
                 <View style={{flexDirection:'row'}}>
                      <Image style={Style.image} source={{uri: rowData.member.avatar_mini}}></Image>
                       <View  style={{flexDirection:'column',flex: 1}}>
                           <Text style={Style.title}  numberOfLines={1}>{rowData.title}</Text>
                           <View  style={{flexDirection:'row',marginTop:3}}>

                               <Text style={Style.node}>{rowData.node.name}</Text>

                               <Text style={Style.name}>  {rowData.member.username} </Text>

                               <Text style={Style.time}>{getTimeBefore(rowData.created)} </Text>
                           </View>
                       </View>
                 </View>
                <View style={{backgroundColor:'#000',flex: 1,height:0.2}}></View>
            </View>

        );
    }
}



const Style = StyleSheet.create({
    image:{
        margin:20,
        width:40,
        height:40
    },

    title:{
        marginTop:20,
        fontSize:14,
        color:'#111222'
    },
    name:{
        fontSize:12,
        color:'#333333',
        height:18,
        fontWeight:'bold'
    },
    node:{
        fontSize:12,
        color:'#333333',
        backgroundColor:'#eee',
        height:18,
        padding:0
    },
    time:{
        fontSize:12,
        color:'#ccc',
        height:18,
        padding:0
    },
});