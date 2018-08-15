
import React,{Component} from "react";
import Foot from "../../components/foot";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "./lis.scss";
import store from "../../store";
import {get_bj ,get_cd ,get_xx ,get_ds} from "../../actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";



@connect(
    state=>(
        state
    )
)
export default class Lis extends Component{
    constructor() {
        super();
        this.state = {
          
        };
      }
    

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_bj("/lisWineList"));
        dispatch(get_cd("/lisWineList"));
        dispatch(get_xx("/lisWineList"));
        dispatch(get_ds("/lisWineList"));
    }

   
    golisBjList=(id)=>{
        // alert(id)
        const {history, location} = this.props;
        history.push(`/lisBjList?id=${id}`)
    }

    render(){
        return(
            <div className="section">
                <div className="lis-header">
                    <div>
                        <i className={"iconfont icon-richscan_icon"}></i>
                        <p >扫一扫</p>
                    </div>
                    <input placeholder="搜索你想要的商品" style={{width:"60%"}} className="search"/>
                    <h3>搜索</h3>
                </div>
                <div style={{width:"100%",height:"100px",position:"fixed",top:"-100px"}}></div>
                <div className="lis-left">
                    <div>
                        <p onClick={this.goPtj}>白酒</p>
                        <p onClick={this.goPtj}>葡萄酒</p>
                        <p onClick={this.goPtj}>洋酒</p>
                        <p onClick={this.goPtj}>果酒</p>
                        <p onClick={this.goPtj}>黄酒</p>
                        <p onClick={this.goPtj}>啤酒</p>
                        <p onClick={this.goPtj}>保健酒</p>
                        <p onClick={this.goPtj}>酒具</p>
                        <p onClick={this.goPtj}>其他</p>
                    </div>
                </div>
                <div className="lis-right">
                    <div className="right-pp">
                        <div>热门品牌</div>
                        <h3>全部品牌 ></h3>
                    </div>
                    <ul className="right-wine">
                        {
                            this.props.bj.map((item,index)=>(
                                <li key={index} onClick={()=>this.golisBjList(item.Id)}>
                                    <img src={item.Image} alt=""/>
                                    <p>{item.Name}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="right-pp">
                        <div>产地</div>
                    </div>
                    <ul className="right-cd">
                        {
                            this.props.cd.map((item,index)=>(
                                <li key={index}>
                                    <p>{item.Value}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="right-pp">
                        <div>香型</div>
                    </div>
                    <ul className="right-cd">
                        {
                            this.props.xx.map((item,index)=>(
                                <li key={index}>
                                    <p>{item.Value}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="right-pp">
                        <div>度数</div>
                    </div>
                    <ul className="right-cd">
                        {
                            this.props.ds.map((item,index)=>(
                                <li key={index}>
                                    <p>{item.Value}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div style={{width:"100%",height:"10px"}}></div>

                </div>
            </div>
        )
    }
}




