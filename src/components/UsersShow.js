import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Posts from '../Posts'

class UsersShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[]
        }
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then(response=>{
            const users=response.data
            console.log(users)
            this.setState({users})
        })
        .catch(err=>{
            alert(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            const posts=response.data
            console.log(posts)
            this.setState({posts})
        })
        .catch(err=>{
            alert(err)
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.users.map(user=>{
                        return <h2 key={user.id}>USER NAME:{user.name}</h2>
                    })
                }
                <h3>POSTS WRITTEN BY THE USER</h3>
                <ul>
                    {
                        this.state.posts.map(post=>{
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UsersShow