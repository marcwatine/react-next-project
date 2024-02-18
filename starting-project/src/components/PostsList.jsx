import { NewPost } from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import {useState} from 'react';
import Modal from './Modal';

export default function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts]= useState([])
    function addPostHandler(postData){
        setPosts((prevPosts) => {
            return [postData, ...prevPosts]
        })
    }
    let modalContent;
    if (isPosting){
        modalContent = <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
    }
    return (
    <>
        {modalContent}
        {posts.length > 0 && (
            <ul className={classes.posts}>
                <Post author='Nico' body='React.js is true dev' />
                <Post author='Markus' body='bro do you even torch' />
                {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{textAlign: 'center'}}>
                <h2>No posts available. Maybe you should add one?</h2>
            </div>
        )}
    </> 
    )
}