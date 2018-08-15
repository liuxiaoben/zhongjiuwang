import React , {Component} from "react";


import ReactSwipe from "../../components/react-swiper";

export default class Guide extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            imgs:[
                require("../../../assets/images/s1.jpg")
            ]
        }
    }


    componentWillMount(){
        const {history} = this.props;
        if(localStorage.vCount > 3){
            history.push("/app")
        }else{
            !!localStorage.vCount?  localStorage.vCount++ : localStorage.vCount = 1;
        }
    }

    componentDidMount(){
        const {history} = this.props;
        setTimeout(()=>{
            history.push("/app")
        },1500)
        
        
    }

    render(){
        const images = this.state.imgs.map((img,index)=>(
            <img key={index} src={img} alt="" style={{width:'100%',height:'100%'}}/>
        ));
        return (
            <div>{images}</div>
        )
    }
}