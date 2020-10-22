import React from "react"
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from "./Home"
import Users from "./Users"
import Posts from "./Posts"
import UsersList from "./components/UsersList"
import PostsList from "./components/PostsList"
import UsersShow from "./components/UsersShow"
import PostsShow from "./components/PostsShow"

function App(props){
    return(
        <BrowserRouter>
            <div>
                <Link to="/">Home|</Link>
                <Link to="/users">Users|</Link>
                <Link to="posts">Posts</Link>

                <Route path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/users" component={UsersList} exact={true}/>
                <Route path="/posts" component={PostsList} exact={true}/>
                <Route path="/users/:id" component={UsersShow}/>
                <Route path="/posts/:id" component={PostsShow}/>
            </div>        
        </BrowserRouter>
    )
}

export default App