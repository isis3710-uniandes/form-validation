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
        <div className="form-control">
            <form onSubmit={handleSubmit}>
                <div>
                    <div><label>Title</label></div>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            className="form-control"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                    
                <div>
                    <div><label>Content</label></div>
                    <div>
                        <input
                            type="text"
                            placeholder="Content"
                            name="content"
                            className="form-control"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div>
                    <div><label>Author</label></div>
                    <div>
                        <input
                            type="text"
                            placeholder="Content"
                            name="author"
                            className="form-control"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary" type="submit">Post</button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;