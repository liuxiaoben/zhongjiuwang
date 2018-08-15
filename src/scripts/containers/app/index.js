


import React , {Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import Home from "../home";
import Lis from "../lis";
import My from "../my";
import Car from "../car"
import Foot from "../../components/foot";


export default class App extends Component {
    render(){
        return (    
           <div className="section">
                <Switch>

                    <Route path="/app/home" component={Home}/>
                    <Route path="/app/lis" component={Lis}/>
                    <Route path='/app/car' component={Car}/>
                    <Route path='/app/my' component={My}/>
                    
                    <Route  render={
                        ()=>(<Redirect to="/app/home"/>)
                    }/>
                </Switch>
                <Foot/>
           </div>
        )
    }
}