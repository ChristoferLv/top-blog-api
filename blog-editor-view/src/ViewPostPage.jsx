import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getPostById } from "./api/requests";
import { useParams } from "react-router";

function ViewPost() {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        async function getPost() {
            const post = await getPostById(postId);
            setPost(post.data);
        }
        getPost();
        return () => setPost({});
    }, [])

    return (
        <>
            <div className="editor-container">
                <form className="post-form">
                    <input type="text" readOnly name="title" value={post?.title ?? ""} />
                    <textarea name="content" value={post?.content??""} readOnly></textarea>
                </form>
            </div>
        </>
    )
}

export default ViewPost;