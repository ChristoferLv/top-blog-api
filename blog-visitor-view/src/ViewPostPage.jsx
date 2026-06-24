import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getCommentsOfPost, getPostById } from "./api/requests";
import { useNavigate, useParams } from "react-router";

function ViewPost() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPost() {
            const post = await getPostById(postId);
            setPost(post.data);
        }

        async function getComments() {
            const comments = await getCommentsOfPost(postId);
            setComments(comments.data);
        }

        getPost();
        getComments();
        return () => { setPost(null); setComments(null); };
    }, []);


    if (!post) return (<><div className="editor-container"><p>Loading...</p></div></>);

    return (
        <>
            <div className="editor-container">
                <div className="post-info">
                    <p className="post-author">By: <strong>{post.owner.username}</strong></p>
                    <p className="published-at">Posted on: <strong>{new Date(post.posted_at).toLocaleDateString()}</strong> at <strong>{new Date(post.posted_at).toLocaleTimeString()}</strong></p>
                </div>
                <form className="post-form">
                    <input type="text" readOnly name="title" value={post.title} />
                    <textarea name="content" value={post.content} readOnly></textarea>
                </form>
                <hr className="posts-separator" />
                <div className="comments">
                    <p className="comments-head">Comments</p>
                    {!comments ? (<p>Loading comments...</p>) : (
                        comments.length == 0 ? (<p>No comments yet.</p>) : (
                            comments.map((comment) => {
                                return (<div key={comment.id} className="comment">
                                    <p className="post-author"><strong>{comment.owner.username}</strong></p>
                                    <p className="published-at">{comment.posted_at}</p>
                                    <p className="comment-content">{comment.content}</p>
                                    <hr className="posts-separator" />
                                </div>);
                            })
                        )
                    )}

                </div>
            </div>
        </>
    )
}

export default ViewPost;