import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { deletePost, getMyPosts, getPostById, makePost, updatePost } from "./api/requests";
import { useNavigate, useParams } from "react-router";
import ConfirmationDialog from "./components/ConfirmationDialog";

function EditPost() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [postData, setPostData] = useState(null);
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
        return () => setPostData(null);
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

    if(!postData) return (<><div className="editor-container"><p>Loading...</p></div></>);


    return (
        <>
            <div className="editor-container">
                <div className="actions">
                    <button className="delete-button" type="submit" onClick={handleDeleteClick}>Delete</button>
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