

import React,{Component} from "react";
import "./lisBjList.scss";
import {connect} from "react-redux";
import {get_wly } from "../../actions";
import url from "url";
import { Tabs, WhiteSpace } from 'antd-mobile';




const tabs = [
    { title: '品牌' },
    { title: '价格▼' },
    { title: '销量▼' },
  ]


@connect(
    state=>(
        state
    )
)
export default class LisBjList extends Component{
    componentWillMount(){
        const {dispatch ,location } = this.props;
        const id = new URLSearchParams(location.search).get("id") || '';
        dispatch(get_wly(`/lisBjList?id=${id}`));

    }

    goBack=()=>(
        this.props.history.go(-1)
    )

    get_dete=(id)=>{
        alert(id)
        const {history, location} = this.props;
        history.push(`/det?id=${id}`)
    }
       

    render(){
        return(
            <div className="section">
               <div className="lisBjList-header">
                    <i className="iconfont icon-fanhui" onClick={this.goBack}></i>
                    <input type="text" placeholder="搜索你想要的商品"/>
                    <span>搜索</span>
                </div>
               
                <Tabs tabs={tabs}>
                <ul>
                    {
                        this.props.wly.map((item,index)=>(
                            <li key={index} onClick={()=>this.get_dete(item.id)}>
                                <img src={item.img} alt=""/>
                                <h3>{item.name}</h3>
                                <p>￥{item.price}</p>
                                <b>{item.shopname}</b>
                            </li>
                        ))
                    }
                </ul>

                </Tabs>
               
            </div>
        )
    }
}