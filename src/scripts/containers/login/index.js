
import React,{Component} from "react";
import "./login.scss";
import {List,InputItem,Button,WhiteSpace,WingBlank,Toast} from "antd-mobile";
import $ from "jquery";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/react/";

export default class Login extends Component{

    showToast=(tip)=>{
        Toast.success(tip, 1);
      }

    goback=()=>{
        const {history} = this.props;
        history.go(-1);
    }
    goRegister=()=>{
        const {history} = this.props;
        history.push("/register");
    }
    goMy=()=>{
        var username = $("#username").val()
        var password = $("#password").val()
        axios.post("/login",{
            username,
            password
        }).then(res=>{
            if(res.data=="1"){
                    localStorage.username = username
                    const {history} = this.props;
                    history.push("/app/my");
            }else{
                this.showToast('账号或者密码错误');
            }
        })
      
    }
    render(){
    
        const usernames = new URLSearchParams(this.props.location.search).get("username") || '';
        return(
            <div id="section">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.goback}></i>
                    <p>登录</p>
                </div>
                <div>
                    <List>
                        <InputItem
                        // value={usernames}
                        clear
                        type="text"
                        placeholder ="请输入手机号"
                        id = "username"
                        >
                        手机号
                        </InputItem>
                        <WhiteSpace size="lg"></WhiteSpace>
                        <InputItem
                        clear
                        placeholder ="请输入密码"
                        id = "password"
                        type="password"
                        >
                        密码
                        </InputItem>
                        <WhiteSpace size="lg"></WhiteSpace>
                        <WingBlank >
                        <Button size="large" type="primary" style={{width:"60%"}} inline="true" onClick={this.goMy}> 登录</Button>
                        <Button style={{width:"10%"}} inline="true"></Button>
                        <Button size="large" type="warning" style={{width:"30%"}} inline="true" onClick={this.goRegister}> 注册</Button>
                        </WingBlank >
                    </List>
                </div>
                <div className="san">
                    <div>
                        <p>———— 第三方账号登录 ————</p>
                        <p>
                            <img src={require("../../../assets/images/wei-xin.png") }alt=""/>
                            <img src={require("../../../assets/images/QQ.png")} alt=""/>
                        </p>
                    </div>
                </div>
                <div className="xy">
                    <div>
                        登录即表示你同意中酒<span>《用户协议》</span>
                    </div>
                </div>
            </div>
        )
    }
}
