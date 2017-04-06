/**
 * Created by wuzefeng on 2017/1/3.
 */


export default function jsonToArticle(json) {

    let article = {
        id: json.id,
        title: json.title,

        url: json.url,
        content: json.content,

        created: json.created,
        last_modified: json.last_modified,

        last_touched: json.last_touched,

        member :{
            id:json.member.id,
            username:json.member.username,
            tagline:json.member.tagline,
            avatar_mini:'http://'+json.member.avatar_mini.slice(2),
            avatar_normal:'http://'+json.member.avatar_normal.slice(2),
            avatar_large:'http://'+json.member.avatar_large.slice(2),

        },

        node :{
            id:json.node.id,
            name:json.node.name,
            title:json.node.title,
            title_alternative:json.node.title_alternative,
            url:json.node.url,
            topics:json.node.topics,
            avatar_mini:json.node.avatar_mini.slice(2),
            avatar_normal:json.node.avatar_normal.slice(2),
            avatar_large:json.node.avatar_large.slice(2)
        }

    }

    return article;

    
}