


import React, {Component} from 'react'

import $ from "../../utils/jquery-1.11.2.min"
import  "../../utils/swiper-3.3.1.min"


export default class ReactSwipe extends Component{
    render(){
        const {children,id,className} = this.props;
        return (
            <div className={"swiper-container " + className} id={id} >
                <div className="swiper-wrapper">
                    {
                        children.map((child,index)=>{
                            return (
                                <div className="swiper-slide" key={index}>{child}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount(){
        // 实例化  
        if(this.props.children){
            const {id,swiperOptions} = this.props;
            new Swiper(`#${id}`,swiperOptions);
        }
        
    }

    componentDidUpdate(){
        // 实例化  
        if(this.props.children){
            const {id,swiperOptions} = this.props;
            new Swiper(`#${id}`,swiperOptions);
        }
    }

}


