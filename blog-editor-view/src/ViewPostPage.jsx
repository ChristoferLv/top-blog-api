import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getPostById } from "./api/requests";
import { useNavigate, useParams } from "react-router";

function ViewPost() {
    const [post, setPost] = useState({});
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPost() {
            const post = await getPostById(postId);
            setPost(post.data);
        }
        getPost();
        return () => setPost({});
    }, []);

    function goToEdit() {
        navigate("/edit/" + postId);
    }

    return (
        <>
            <div className="editor-container">

                <button className="edit-button" onClick={goToEdit}>Edit</button>
                <p className="published-at">Posted on: <strong>{new Date(post.posted_at).toLocaleDateString()}</strong> at <strong>{new Date(post.posted_at).toLocaleTimeString()}</strong></p>
                <form className="post-form">
                    <input type="text" readOnly name="title" value={post?.title ?? ""} />
                    <textarea name="content" value={post?.content ?? ""} readOnly></textarea>
                </form>
            </div>
        </>
    )
}

export default ViewPost;