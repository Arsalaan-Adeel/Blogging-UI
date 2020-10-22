import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostsShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:{},
            posts:{},
            comments:[]
        }
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            const posts=response.data
            console.log(posts)
            axios.get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
            .then(response=>{
                const users=response.data
                this.setState({posts,users})
            })
        })
        .catch(err=>{
            alert(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response=>{
            const comments=response.data
            console.log(comments)
            this.setState({comments})
        })
        .catch(err=>{
            alert(err)
        })
    }

    render(){
        const id=this.props.match.params.id
        return(
            <div>
                 <h2>USER NAME:{this.state.users.name}</h2>
                 <h2>TITLE:{this.state.posts.title}</h2>
                 <h3>BODY:{this.state.posts.body}</h3>
                 <h2>COMMENTS:</h2>
                    <ul>
                        {
                            this.state.comments.map(comment=>{
                                return<li key={comment.id}>{comment.body}</li>
                            })
                        }
                    </ul>
                 <p><Link to={`/users/${id}`}>More Posts from the author:{this.state.users.name}</Link></p>
            </div>
        )
    }
}

export default PostsShow