
import React,{Component} from "react";
import "./register.scss";
import {List,InputItem,Button,WhiteSpace,WingBlank, Toast} from "antd-mobile";
import store from "../../store";
import {goRegister} from "../../actions";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/react/";


import $ from "jquery";

export default class Login extends Component{

    goback=()=>{
        const {history} = this.props;
        history.go(-1);
    }
    goLogin=()=>{
        const {history} = this.props;
        history.push("/login");
    }
    get_code=()=>{
        var username = $("#username").val()
        console.log(username)
        var code = $("#code").val()
        var reg = /^1(3|4|5|6|7|8)\d{9}$/g
        if(reg.test(username)){
            axios.get("/check",{
                params:{username}
                
            }).then(res=>{
                if(res.data=="0"){
                    axios.get("/code",{
                        params:{
                            username,
                            code
                        }
                    }).then(res=>{
                        if(res.data == "1"){
                            this.successToast("验证码发送成功")
                         }else{
                            this.failToast("用户名已存在")
                            
                         }
                    })
                }else{
                    this.showToast('请输入有效的电话号码');
                }
            })
        }
    }
     showToast=(tip1)=>{
        Toast.success(tip1, 1);
      }
   
    goRegister=()=>{
        var username = $("#username").val()
        var password = $("#password").val()
        var code = $("#code").val()
        const {history} = this.props;
        if(username!=""&&code!=""){
            axios.get("/checks",{
                params:{
                    username,
                    code
                }
            }).then(res=>{
                if(res.data =="1"){
                    var reg2 = /^[0-9]{6,12}$/g
                    if(reg2.test(password)){
                        axios.get("/register",{
                            params:{
                                username,
                                password
                            }
                        }).then(res=>{
                            if(res.data=="0"){
                                localStorage.username = username
                                history.push("/login?username="+username);
                            }else{
                                this.showToast('注册失败');
                            }
                           
                        })
                    }else{
                        this.showToast('请输入6-12位数字密码');
                    }
                }else{
                    this.showToast('验证码错误');
                }
            })
        }else{
            this.showToast('请输入用户名和验证码');
        }
    }

    render(){
        return(
            <div className="section">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.goback}></i>
                    <p>注册</p>
                </div>
                <div style={{marginTop:"30px"}}>
                    <List>
                        <InputItem
                        clear
                        type="text"
                        placeholder ="请输入手机号"
                        ref = "username"
                        id = "username"
                        >
                        手机号
                        </InputItem>
                        <Button size="small" type="ghost" style={{width:100,position:"absolute",right:"40px",top:"7px"}} inline="true" onClick={this.get_code}> 获取验证码</Button>
                        <WhiteSpace size="lg"></WhiteSpace>
                        <InputItem
                        clear
                        placeholder ="请输入验证码"
                        ref = "code"
                        id = "code"
                        >
                        验证码
                        </InputItem>
                        <WhiteSpace size="lg"></WhiteSpace>
                        <InputItem
                        clear
                        type="text"
                        placeholder ="请输入密码"
                        ref = "password"
                        type = "password"
                        id = "password"
                        >
                        密码
                        </InputItem>
                        <WingBlank >
                        <Button size="large" type="warning" style={{width:"30%"}} inline="true" onClick={this.goLogin}> 登录</Button>
                        <Button style={{width:"10%"}} inline="true"></Button>
                        <Button size="large" type="primary" style={{width:"60%"}} inline="true" onClick={this.goRegister}> 注册</Button>
                        </WingBlank >
                    </List>
                </div>
            
            </div>
        )
    }
}
