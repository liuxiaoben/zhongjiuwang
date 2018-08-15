
import React,{Component} from "react";
import "./detail.scss";
import {connect} from "react-redux";
import {homeBjList} from "../../actions";
import url from "url";
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';


@connect(
    state=>(
        state
    )
)
export default class Datail extends Component{
    componentWillMount(){
        const {dispatch ,location } = this.props;
        const id = new URLSearchParams(location.search).get("key") || '';
        dispatch(homeBjList(`/homeWineDetail?id=${id}`));
    }

    goBack=()=>(
        this.props.history.go(-1)
    )

    render(){
        return(
            <div className="section">
                <div className="detail-header">
                    <i className="iconfont icon-fanhui" onClick={this.goBack}></i>
                    <div>
                        <span>商品</span>
                        <span>详情</span>
                        <span>评价</span>
                    </div>
                </div>
                <div className="detail-box">
                    <ul>
                        {
                            this.props.detailWine.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image} alt=""/>
                                    <h3>{item.subject}</h3>
                                    <p>{item.ShortDescription}</p>
                                    <p>￥{item.price}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="detail-foot">
                <WingBlank>
                    <Button type="primary" size="small" id="gocar">加入购物车</Button><WhiteSpace />
                    <Button type="primary" size="small" id="goshopping">立即购买</Button><WhiteSpace />
                </WingBlank>
                </div>
            </div>
        )
    }
}