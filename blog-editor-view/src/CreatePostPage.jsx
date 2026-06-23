import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMyPosts, makePost } from "./api/requests";
import { useNavigate } from "react-router";

function CreatePost() {
    const [postData, setPostData] = useState({ title: "", content: "" });
    const navigate = useNavigate();

    function handlePostData(event) {
        const whoChanged = event.target;
        setPostData({ ...postData, [whoChanged.name]: whoChanged.value });
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const result = await makePost(postData);
        if (result && result.success) {
            navigate("/posts/my", { replace: true });
        } else {
            alert("Something went wrong.")
        }
    }


    return (
        <>
            <div className="editor-container">
                <form onSubmit={handleSubmit} className="post-form">
                    <button type="submit">Publish</button>
                    <input type="text" onChange={handlePostData} name="title" placeholder="Title" value={postData.title} />
                    <textarea name="content" onChange={handlePostData} id="" placeholder="Your creation..."></textarea>
                </form>
            </div>
        </>
    )
}

export default CreatePost;