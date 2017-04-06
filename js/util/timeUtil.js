/**
 * Created by wuzefeng on 2017/1/4.
 */


export default function getTimeBefore(time) {


    let timestamp = (new Date()).valueOf();


    let t=(timestamp-time*1000)/1000;


    if(t<60){
        return '刚刚';
    }else if(t< 60*60){
        return parseInt(t/60)+'分钟前';
    }else if(t< 60*60 *24){
        return  parseInt(t/60/60)+'小时前';
    }else{
        let   now=new Date(time*1000);
        return   now.getYear()+"."+now.getMonth()+1+"."+now.getDate();
    }

}