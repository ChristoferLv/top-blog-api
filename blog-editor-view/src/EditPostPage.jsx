import { use, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { deleteComment, deletePost, getCommentsOfPost, getMyPosts, getPostById, makePost, updatePost } from "./api/requests";
import { useNavigate, useParams } from "react-router";
import ConfirmationDialog from "./components/ConfirmationDialog";

function EditPost() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [postData, setPostData] = useState(null);
    const [comments, setComments] = useState(null);
    const navigate = useNavigate();
    const { postId } = useParams();

    const fetchComments = useCallback(
        async () => {
            const comments = await getCommentsOfPost(postId);
            if (comments && comments.success)
                setComments(comments.data);
        }
    );

    function handlePostData(event) {
        const whoChanged = event.target;
        setPostData({ ...postData, [whoChanged.name]: whoChanged.value });
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const result = await updatePost(postId, postData);
        if (result && result.success) {
            navigate("/", { replace: true });
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
        fetchComments();
        return () => { setPostData(null); setComments(null); };

    }, []);


    const handleDeleteClick = () => {
        setIsDialogOpen(true);
    };

    const handleConfirmAction = async () => {
        const result = await deletePost(postId);
        if (result && result.success) {
            setIsDialogOpen(false);
            navigate("/", { replace: true });
        }
    };

    const handleCancelAction = () => {
        setIsDialogOpen(false);
    };

    async function handleDeleteComment(commentId) {
        const result = await deleteComment(commentId);
        if (result && result.success) {
            fetchComments();
        }
    }

    if (!postData) return (<><div className="editor-container"><p>Loading...</p></div></>);


    return (
        <>
            <div className="editor-container">
                <div className="actions">
                    <button onClick={() => { navigate("/view/" + postId) }} className="edit-button">View</button>
                    <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
                    <button className="save-button" type="submit" form="post-form">Save</button>
                </div>
                <div className="post-info">
                    <p className="post-author">By: <strong>{postData.owner.username}</strong></p>
                    <p className="published-at">Posted on: <strong>{new Date(postData.posted_at).toLocaleDateString()}</strong> at <strong>{new Date(postData.posted_at).toLocaleTimeString()}</strong></p>
                </div>
                <form id="post-form" onSubmit={handleSubmit} className="post-form">
                    <input type="text" onChange={handlePostData} name="title" value={postData.title || ""} />
                    <textarea name="content" onChange={handlePostData} value={postData.content || ""}></textarea>
                </form>
                <hr className="posts-separator" />
                <div className="comments">
                    <p className="comments-head">Comments</p>
                    {!comments ? (<p>Loading comments...</p>) : (
                        comments.length == 0 ? (<p>No comments yet.</p>) : (
                            comments.map((comment) => {
                                return (<div key={comment.id} className="comment">
                                    <p className="post-author"><strong>{comment.id}</strong></p>
                                    <p className="post-author"><strong>{comment.username}</strong></p>
                                    <p className="published-at">{new Date(comment.posted_at).toLocaleDateString()} - {new Date(comment.posted_at).toLocaleTimeString()}</p>
                                    <p className="comment-content">{comment.content}</p>
                                    <div className="comment-actions">
                                        <button className="delete-comment" onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                                    </div>
                                    <hr className="posts-separator" />
                                </div>);
                            })
                        )
                    )}

                </div>
            </div>



            <ConfirmationDialog
                isOpen={isDialogOpen}
                title="Delete post permanently?"
                message="Are you absolutely sure you want to delete your this post? This action can't be reverted."
                onConfirm={handleConfirmAction}
                onCancel={handleCancelAction}
            />
        </>
    )
}

export default EditPost;