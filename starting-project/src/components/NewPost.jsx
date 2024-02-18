//import { useState } from 'react'
import classes from './NewPost.module.css';
import {useState} from 'react';

export function NewPost({onCancel, onSubmit, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState(''); // can be '' or any other value/component
    const [enteredAuthor, setEnteredAuthor] = useState(''); // can be '' or any other value/component

    function bodyChangeHandler(event) {
        console.log(event.target.value);
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value)
    }
    function submitHandler(event){
        event.preventDefault(); // prevent the default behavior of the form (sending a request)
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        console.log(postData);
        onAddPost(postData);
        onCancel();
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
        
        <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required onChange={authorChangeHandler}/>
        </p>
        <p className={classes.actions}>
            <button type='button' onClick={onCancel}>Cancel</button>
            <button type='submit' onClick={onSubmit}>Submit</button> 
        </p>
        </form>
    );
}
//export default NewPost;