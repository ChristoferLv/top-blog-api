import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMyPosts } from "./api/requests";
import { Link, useNavigate } from "react-router";

function Home() {
    const { user } = useContext(AuthContext);
    const [postsList, setPostsList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            const posts = await getMyPosts(user.token);
            setPostsList(posts.data);
        }
        if (user)
            getPosts();
        return () => setPostsList([]);
    }, [user]);

    return (
        <>
            <div className="posts-container">
                {postsList.map((post) => {
                    return (<div key={post.id} className="post">
                        <Link to={`/view/${post.id}`}>
                            <p className="post-title multi-line-truncate">{post.title}</p>
                            <p className="summary multi-line-truncate">{post.content}</p>
                            <p className="post-author">By: <strong>{post.owner.username}</strong></p>
                            <p className="published-at">Posted on: <strong>{new Date(post.posted_at).toLocaleDateString()}</strong> at <strong>{new Date(post.posted_at).toLocaleTimeString()}</strong></p>
                        </Link>
                        <hr className="posts-separator" />
                    </div>)
                })}
            </div >

        </>
    )
}

export default Home;