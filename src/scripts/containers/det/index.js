

import React,{Component} from "react";
import url from "url";
import {connect} from "react-redux";
import {get_det} from "../../actions";

@connect(
    state=>(
        state
    )
)
export default class Det extends Component{


    componentWillMount(){
        const {dispatch ,location } = this.props;
        const id = new URLSearchParams(location.search).get("id") || '';
        dispatch(get_det(`/det?id=${id}`));
        console.log(id)
    }
    render(){
        return(
            <div className="section">
                <ul>
                    {
                        this.props.det.map((item,index)=>{
                            <li key={index}>
                                <img src={item.ImagePath} alt=""/>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}