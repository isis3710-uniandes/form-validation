import React, { useState } from 'react';
import * as Joi from "joi";

function CreatePost(){

    const [data, setData] = useState({
        title: "",
        content: "",
        author: ""
    })

    const schema = Joi.object({
        title: Joi.string().required().min(3),
        content: Joi.string().required().min(3),
        author: Joi.string().required().min(3)
    })

    function handleSubmit(event){
        event.preventDefault();
        const {error} = schema.validate(data)
        if(error){
            console.log("Error in form")
        } else {
            console.log("Sending data")
        }
        
    }

    function handleInputChange(event){
        setData({...data, [event.target.name]: event.target.value})
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group"> 
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
                
            <div className="form-group">
                <label>Content</label>
                
                <input
                    type="text"
                    placeholder="Content"
                    name="content"
                    className="form-control"
                    onChange={handleInputChange}
                />
                
            </div>

            <div className="form-group">
                <label>Author</label>
                <input
                    type="text"
                    placeholder="Content"
                    name="author"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
                <button className="btn btn-primary" type="submit">Post</button>
            </div>
        </form>
        
    );
}

export default CreatePost;