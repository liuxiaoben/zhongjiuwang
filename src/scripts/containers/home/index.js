
import React,{Component} from "react";
import Foot from "../../components/foot";
import "./home.scss";
import { Link } from "react-router-dom";
import { Carousel } from 'antd-mobile';
import {connect} from "react-redux";
import store from "../../store";
import {get_wines ,get_bjg, get_hjg ,get_yjzq} from "../../actions";
import ReactSwipe from "../../components/react-swiper";


@connect(
    state=>(
        // {
        //     wines:state.wines,
        //     bjg:state.bjg,
        //     hjg:state.hjg
        // }
       state
    )
)

export default class Home extends Component{
     
    constructor(props){
        super(props);
        this.state = {
            imgs:[
                require("../../../assets/images/10.jpg"),
                require("../../../assets/images/11.jpg"),
                require("../../../assets/images/12.jpg"),
            ]
           
        }
    }
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_wines("/wines"));
        dispatch(get_bjg("/homeWineList"));
        dispatch(get_hjg("/homeWineList"));
        dispatch(get_yjzq("/homeWineList"));
    }
    
    homeBjList=(id)=>{
        const {history, location} = this.props;
        history.push(`/detail?key=${id}`)
    } 
   
   

    render(){
        const images = this.state.imgs.map((item,index)=>(
            <img key={index} src={item} alt=""/>
        ));
        // const {wines} = this.props;
        return(
            
            <div className="section">
                <header>
                    <div className="header-left">
                        <i className={"iconfont icon-richscan_icon"}></i>
                        <p >扫一扫</p>
                    </div>
                    <div className="header-center">
                        中酒网
                    </div>
                    <div className="header-right">
                        <i className={"iconfont icon-fangdajing"}></i>
                        <p>搜索</p>
                    </div>
                </header>
                <div style={{height:200}}>
                    <ReactSwipe className="section" id="guide" swiperOptions={{
                        loop:true,
                        speed:3000,
                        autoplay:true
                    }}>
                        {images}
                    </ReactSwipe>
                </div>
                <ul className="wines">
                      {
                          this.props.wines.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image} alt=""/>
                                <p>{item.subject}</p>
                            </li>
                          ))
                      }
                </ul>
                <div className="zjkx">
                    <p>中酒<span>快讯</span> |</p>
                </div>
                <div className="pic-1">
                    <div className="pic-1-1">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170331/6362656666291708059011897.jpg" alt=""/>
                    </div> 
                    <div className="pic-1-2">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170331/6362656666326028111738842.jpg" alt=""/>
                    </div>
                    <div className="pic-1-3">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170331/6362656666279228026283419.jpg" alt=""/>
                    </div>  
                </div>
                <div className="gd">
                    <div>
                        <p>—— 白酒馆 ——</p>
                    </div>
                    <p>更多 ></p>
                </div>
                <div className="pic-1">
                    <div className="pic-1-1">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170414/6362777418191092561663846.jpg" alt=""/>
                    </div> 
                    <div className="pic-1-2">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170331/6362656666313548088010364.jpg" alt=""/>
                    </div>
                    <div className="pic-1-3">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170331/6362656666279228026283419.jpg" alt=""/>
                    </div>  
                </div>
                <ul className="bjg">
                    {
                        this.props.bjg.map((item,index)=>(
                            <li key={index} onClick={()=>this.homeBjList(item.id)}>
                                <img src={item.image} alt=""/>
                                <h3>{item.subject}</h3>
                                <div>
                                    <p>￥{item.price}</p>
                                    <i className="iconfont icon-gouwuche"></i>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="gd">
                    <div>
                        <p>—— 红酒馆 ——</p>
                    </div>
                    <p>更多 ></p>
                </div>
                <div className="pic-1">
                    <div className="pic-1-1">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170728/6363683458881788705809826.jpg" alt=""/>
                    </div> 
                    <div className="pic-1-2">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170314/6362510234452365456765120.jpg" alt=""/>
                    </div>
                    <div className="pic-1-3">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170728/6363683460958652342162470.jpg" alt=""/>
                    </div>  
                </div>
                <ul className="bjg">
                    {
                        this.props.hjg.map((item,index)=>(
                            <li key={index} onClick={()=>this.homeBjList(item.id)}>
                                <img src={item.image} alt=""/>
                                <h3>{item.subject}</h3>
                                <div>
                                    <p>￥{item.price}</p>
                                    <i className="iconfont icon-gouwuche"></i>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="gd">
                    <div>
                        <p>—— 洋酒专区 ——</p>
                    </div>
                    <p>更多 ></p>
                </div>
                <div className="pic-1">
                    <div className="pic-1-1">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170411/6362752959162412541563407.jpg" alt=""/>
                    </div> 
                    <div className="pic-1-2">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170411/6362752959181132587805211.jpg" alt=""/>
                    </div>
                    <div className="pic-1-3">
                        <img src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170411/6362752959193612601533690.jpg" alt=""/>
                    </div>  
                </div>
                <ul className="bjg">
                    {
                        this.props.yjzq.map((item,index)=>(
                            <li key={index} onClick={()=>this.homeBjList(item.id)}>
                                <img src={item.image} alt=""/>
                                <h3>{item.subject}</h3>
                                <div>
                                    <p>￥{item.price}</p>
                                    <i className="iconfont icon-gouwuche"></i>
                                </div>
                            </li>
                        ))
                    }
                </ul>


                <Foot/>
            </div>
        )
    }
}
 

