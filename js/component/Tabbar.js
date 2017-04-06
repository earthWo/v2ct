/**
 * Created by wuzefeng on 2016/12/18.
 */
import React, {Component} from 'react';

import TabNavigator from 'react-native-tab-navigator';


import {
    Text,
    StyleSheet,
    Image
} from 'react-native';



import TagFragment from '../scene/TagFragment'


export default class Tabbar extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'hot',
            tabNames:['首页','最热','最新']

        };
      }

    render(){
        return (
            <TabNavigator>

                <TabNavigator.Item
                    title="最热"
                    selected={this.state.selectedTab ==='hot'}
                    selectedTitleStyle={{color: 'rgb(0,0,0)'}}
                    renderIcon={()=><Image style={style.tagItem} source={require('../image/hot_normal.png')}/>}
                    renderSelectedIcon={()=><Image style={style.tagItem} source={require('../image/hot_press.png')}/> }
                    onPress={()=>this.setState({selectedTab:'hot'})}>
                    {<TagFragment tag="hot"/>}
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="最新"
                    selected={this.state.selectedTab ==='new'}
                    selectedTitleStyle={{color: 'rgb(0,0,0)'}}
                    renderIcon={()=><Image style={style.tagItem} source={require('../image/new_normal.png')}/>}
                    renderSelectedIcon={()=><Image style={style.tagItem} source={require('../image/new_press.png')}/> }
                    onPress={()=>this.setState({selectedTab:'new'})}>
                    {<TagFragment tag="new"/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    };

}

const style=StyleSheet.create({
    tagItem:{
        width:20,
        height:20,
    }
});