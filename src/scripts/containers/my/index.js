

import React,{Component} from "react";
import Foot from "../../components/foot"
import "./my.scss";

export default class My extends Component{

    goLogin=()=>{
        const {history} = this.props;
        history.push("/login");
    }
    goBack=()=>{
        const {history} = this.props;
        history.push("/app/my");
        localStorage.username=""
    }

    render(){
        var username = localStorage.username
        return(
            <div className="section">
                <div className="cl">
                <header className="my-box">
                    <div onClick={this.goLogin}>
                        <i className="iconfont icon-ren"></i>
                        <p>{username?username:'登录/注册'  }</p>
                    </div>
                    <p className="iconfont icon-shezhi" onClick={this.goBack}></p>
                </header>
                <div className="tbody"> 
                    <div className="tbody-1">
                        <h3>我的订单</h3>
                        <span>查看全部订单></span>
                    </div>
                    <ul className="my-ul">
                        <li>
                            <div className="iconfont icon-daifukuan"></div>
                            <p>待付款</p>
                        </li>
                        <li>
                            <div className="iconfont icon-shoucangtubiao-"></div>
                            <p>待收货</p>
                        </li>
                        <li>
                            <div className="iconfont icon-daipingjia"></div>
                            <p>待评价</p>
                        </li>
                        <li>
                            <div className="iconfont icon-tuikuan"></div>
                            <p>售后/退款</p>
                        </li>
                    </ul>
                    <ul className="my-ul">
                        <li>
                            <div>0</div>
                            <p>优惠券</p>
                        </li>
                        <li>
                            <div>0</div>
                            <p>红包</p>
                        </li>
                        <li>
                            <div>0</div>
                            <p>积分</p>
                        </li>
                        <li>
                            <div>0</div>
                            <p>余额</p>
                        </li>
                    </ul>
                    <ul className="ul-3">
                        <li>
                            <div className="iconfont icon-guanzhu"></div>
                            <p>我的关注</p>
                        </li>
                        <li>
                            <div className="iconfont icon-wodezuji"></div>
                            <p>我的足迹</p>
                        </li>
                        <li>
                            <div className="iconfont icon-laba"></div>
                            <p>邀请有奖</p>
                        </li>
                        <li>
                            <div className="iconfont icon-dizhi"></div>
                            <p>地址本</p>
                        </li>
                        <li>
                            <div className="iconfont icon-wodepintuan"></div>
                            <p>我的拼团</p>
                        </li>
                        <li>
                            <div className="iconfont icon-dingdan"></div>
                            <p>线下订单</p>
                        </li>
                    </ul>
                </div>
                </div>
                <Foot/>

            </div>
        )
    }
}