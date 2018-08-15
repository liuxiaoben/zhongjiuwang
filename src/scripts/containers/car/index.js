

import React,{Component} from "react";
import "./car.scss";


export default class Datail extends Component{

    gohome=()=>{
        const {history, location} = this.props;
        history.push("/app/home")
    }
    gologin=()=>{
        const {history, location} = this.props;
        history.push("/login")
    }

    render(){
        return(
            <div className="section">
                <div id="car-head">
                    <p>购物车</p>
                </div>
                <div className="car-box">
                    <div className="car-box-i">
                        <i className="iconfont icon-gouwuche"></i>
                    </div>
                    <div className="car-box-p">
                        <p>购物车还是空的，您可以去逛逛</p>
                    </div>
                    <div className="car-box-btn">
                        <button id="gogo" onClick={this.gohome}>去逛逛</button>
                        <button id="gologin" onClick={this.gologin}>去登录</button>
                    </div>
                </div>
            </div>
        )
    }
}