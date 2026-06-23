import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMyPosts, getPostById, makePost, updatePost } from "./api/requests";
import { useNavigate, useParams } from "react-router";

function EditPost() {
    const [postData, setPostData] = useState({ title: "", content: "" });
    const navigate = useNavigate();
    const { postId } = useParams();


    function handlePostData(event) {
        const whoChanged = event.target;
        setPostData({ ...postData, [whoChanged.name]: whoChanged.value });
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const result = await updatePost(postId, postData);
        if (result && result.success) {
            navigate("/posts", { replace: true });
        } else {
            alert("Something went wrong.")
        }
    }

    useEffect(() => {
        async function getPost() {
            const post = await getPostById(postId);
            setPostData(post.data);
        }
        getPost();
        return () => setPostData({});
    }, [])


    return (
        <>
            <div className="editor-container">
                <form onSubmit={handleSubmit} className="post-form">
                    <button type="submit">Save</button>
                    <input type="text" onChange={handlePostData} name="title" value={postData.title || ""} />
                    <textarea name="content" onChange={handlePostData} value={postData.content || ""}></textarea>
                </form>
            </div>
        </>
    )
}

export default EditPost;