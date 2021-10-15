import React, {useState} from "react";

function Post(props){
    let [post, setPost] = useState(props.post) //hook de estado

    function renderLikes(){
        if(post.likes === 1){
            return "1 like"
        } else if(post.likes > 1){
            return post.likes + " likes"
        } else {
            return "Give us a like"
        }
    }

    function increaseLikes(){
        console.log("Clicked...")
        setPost({...post, likes: post.likes + 1 })
    }

    return(
        <div className="mb-2">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <p>{renderLikes()}</p>
            <button className="btn btn-primary" onClick={increaseLikes}>Like</button>
            <button className="btn btn-danger mx-2" onClick={() => props.onDelete(props.post.id)}>Delete post</button>
            <hr></hr>
        </div>
    )
}

export default Post;