

import React , {Component} from "react";
import { Route,Switch ,Redirect} from "react-router-dom";


import Guide from "../guide";
import App from "../app";
import Login from "../login";
import Register from "../register";
import Detail from "../detail";
import LisBjList from "../lisBjList";
import Det from "../det";


export default class Layout extends Component {
    render(){
        return (    
            <Route  
                render = {
                    ({match,history,location}) => (
                        <Switch>
                            <Route path= "/" exact component={Guide}/>
                            <Route path='/app' component={App}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/detail' component={Detail}/>
                            <Route path='/lisBjList' component={LisBjList}/>
                            <Route path='/det' component={Det}/>
                            
                            
                            <Route render={()=>(<Redirect to="/app/home"/>)} />
                        </Switch>
                    )
                }
            />
        )
    }
}