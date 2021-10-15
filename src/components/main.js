import React, {useState, useEffect} from "react";
import CreatePost from "./createpost";

import Post from "./post";

function Main(){

    let [posts, setPosts] = useState([])

    const URL = "https://gist.githubusercontent.com/josejbocanegra/6e78da7a204d2bb084612498c4dec28d/raw/62c411ad585eec9ff34273c6040005abd2c3952a/posts.json";

    useEffect(()=>{
        fetch(URL).then(res=>res.json()).then(res=>{
            setPosts(res);
        })
    }, []);

    function handleDelete(id){
        console.log("Deleting component " + id)
        let filteredList = posts.filter(p => p.id !== id)
        setPosts(filteredList);
    }

    return(
    <div className="container">
    <h1>Listado de posts</h1>
        {posts.map(p => <Post onDelete={handleDelete} post={p} key={p.id}/>) }
    <CreatePost/>
    </div>) 
}

export default Main;
