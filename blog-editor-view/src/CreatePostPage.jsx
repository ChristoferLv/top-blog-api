import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMyPosts, makePost } from "./api/requests";
import { useNavigate } from "react-router";

function CreatePost() {
    const [postData, setPostData] = useState({ title: "", content: "" });
    const navigate = useNavigate();
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isContentValid, setIsContentValid] = useState(true);

    function handlePostData(event) {
        const whoChanged = event.target;
        if (!isTitleValid || !isContentValid)
            validadePost({ ...postData, [whoChanged.name]: whoChanged.value })
        setPostData({ ...postData, [whoChanged.name]: whoChanged.value });
    }

    function validadePost(values) {
        let result = true;
        if (values.title.length < 1 || values.title.length > 100) {
            result = false;
            setIsTitleValid(false);
        }
        else {
            setIsTitleValid(true);
        }

        if (values.content.length < 1 || values.content.length > 10000) {
            result = false;
            setIsContentValid(false);
        }
        else {
            setIsContentValid(true);
        }
        return result;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validadePost(postData))
            return;
        const result = await makePost(postData);
        if (result && result.success) {
            navigate("/", { replace: true });
        } else {
            alert("Something went wrong.")
        }
    }


    return (
        <>
            <div className="editor-container">
                <button className="publish-button" form="post-form" type="submit">Publish</button>
                {!isTitleValid && <p className="comment-invalid">● Title length must be between 1 and 100 characters!</p>}
                {!isContentValid && <p className="comment-invalid">● Content length must be between 1 and 10000 characters!</p>}
                <form id="post-form" onSubmit={handleSubmit} className="post-form">
                    <input type="text" onChange={handlePostData} name="title" placeholder="Title" value={postData.title} />
                    <textarea name="content" onChange={handlePostData} value={postData.content} placeholder="Your creation..."></textarea>
                </form>
            </div>
        </>
    )
}

export default CreatePost;