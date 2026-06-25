import { use, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { deleteComment, getCommentsOfPost, getPostById, makeComment } from "./api/requests";
import { useNavigate, useParams } from "react-router";

function ViewPost() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [myComment, setMyComment] = useState("");
    const { postId } = useParams();
    const navigate = useNavigate();

    const fetchComments = useCallback(
        async () => {
            const comments = await getCommentsOfPost(postId);
            if (comments && comments.success)
                setComments(comments.data);
        }
    );

    useEffect(() => {
        async function getPost() {
            const post = await getPostById(postId);
            setPost(post.data);
        }
        
        getPost();
        fetchComments();
        return () => { setPost(null); setComments(null); };
    }, []);

    function goToEdit() {
        navigate("/edit/" + postId);
    }

    function handleCommentChange(e) {
        setMyComment(e.target.value);
    }

    async function sendComment(e) {
        e.preventDefault();
        if (myComment == "") return;
        const result = await makeComment(postId, myComment);
        if (result && result.success) {
            setMyComment("");
            fetchComments();
        }
    }

    if (!post) return (<><div className="editor-container"><p>Loading...</p></div></>);

    return (
        <>
            <div className="editor-container">
                <button className="edit-button" onClick={goToEdit}>Edit</button>
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
                    <div className="make-comment">
                        <form>
                            <label htmlFor="comment">Make your comment</label>
                            <input id="comment" type="text" placeholder={"What you have to say?"} onChange={handleCommentChange} value={myComment} />
                            <div>
                                <button className="send-comment" onClick={sendComment}>Send</button>
                            </div>
                        </form>
                    </div>
                    {!comments ? (<p>Loading comments...</p>) : (
                        comments.length == 0 ? (<p>No comments yet.</p>) : (
                            comments.map((comment) => {
                                return (<div key={comment.id} className="comment">
                                    <p className="post-author"><strong>{comment.owner.username}</strong></p>
                                    <p className="published-at">{new Date(comment.posted_at).toLocaleDateString()} - {new Date(comment.posted_at).toLocaleTimeString()}</p>
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