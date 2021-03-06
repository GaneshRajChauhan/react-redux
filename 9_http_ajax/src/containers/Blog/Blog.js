import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostId:null,
        error:false
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts=response.data.slice(0,4);
            const updatedPosts=posts.map(post=>{
                return {
                    ...post,
                    author:'Max'
                }
            })

            this.setState({posts:updatedPosts});
            // console.log(response);
        })
        .catch(error=>{
            // console.log("Something went wrong!");
            this.setState({error:true});
        })
    }
    postSelectedHandler=(id)=>{
    this.setState({selectedPostId:id});
    }
    render () {
        let posts=<p style={{textAlign: 'center'}}>Something went Wrong!!</p>
        if(!this.state.error)
        {
         posts=this.state.posts.map(post=>{
                return <Post
                 title={post.title} 
                 author={post.author}
                  key={post.id}
                  clicked={()=>this.postSelectedHandler(post.id)}
                  />
            }
    
            )
        }
        
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost  id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;