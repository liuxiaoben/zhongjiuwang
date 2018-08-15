

import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Foot extends Component {
    
    state = {
        footList:[
            {path:"/app/home",txt:"首页",icon:"icon-shouye"},
            {path:"/app/lis",txt:"分类",icon:"icon-fenlei"},
            {path:"/app/car",txt:"购物车",icon:"icon-gouwuche"},            
            {path:"/app/my",txt:"我的",icon:"icon-ren"}
        ],
    }

    render(){
        return (
            <footer>
                {
                    this.state.footList.map((foot,index)=>(
                        <div key={index}>
                            <NavLink to={foot.path} activeClassName="ft-active-1">
                                <i className={"iconfont " + foot.icon}></i>
                                <span>{foot.txt}</span>
                            </NavLink>
                        </div>
                    ))
                }
            </footer>
        )
    }
}