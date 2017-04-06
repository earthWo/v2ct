/**
 * Created by wuzefeng on 2016/12/18.
 */
import React ,{Component} from 'react';

import {
    Text,
    ScrollView,
    RefreshControl,
    ToastAndroid,
    ListView,
    View
} from 'react-native';


import NormalListView from '../component/NormalListView'

import jsonToArticle from '../mould/Article'


export default class TagFragment extends Component{



      // 构造
      constructor(props) {
        super(props);


        // 初始状态
        this.state = {
            refreshing:true,
            loadStatus:false,
            dataBlob:[{title:'t'}],
        }
      }


    render(){
        return(
            <ScrollView
                style={{}}
                refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    title="Loading..."
                    onRefresh={this._Refresh.bind(this)}
                    />
                }>
                {this._renderContent()}
            </ScrollView>
        )
    }


    componentDidMount() {
        this._fetchData();
    }


    _renderContent(){
       if(this.state.loadStatus&&!this.state.refreshing){
            return (
                <NormalListView contents={this.state.dataBlob}/>
          );
       }
    }


    _Refresh(){
        this.setState({
            refreshing:true,
        });
        this._fetchData();
    }


    //获取最热数据
    _fetchData(){


        let url;
        if(this.props.tag==='new'){
            url ='https://www.v2ex.com/api/topics/latest.json';
        }else{
            url='https://www.v2ex.com/api/topics/hot.json';
        }

        fetch(url)
            .then((response)=>response.json())
            .then((responseData)=>{

                var dataList= [];
                if(responseData.length>0){


                    for (let d of responseData) {
                        let info = jsonToArticle(d);
                        dataList.push(info);
                    }

                   this.setState({
                       refreshing:false,
                       loadStatus:true,
                       dataBlob:dataList
                   });

                }
            })
            .done();
    }
}
