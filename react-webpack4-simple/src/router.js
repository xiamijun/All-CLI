import React from "react"
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import HomeIndex from "./pages/home";
import UserIndex from "./pages/user";
class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/user">user</Link></li>
                </ul>
                <div>
                    {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                    <Switch>
                        <Route exact path="/" component={HomeIndex} />
                        <Route exact path="/user" component={UserIndex}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;