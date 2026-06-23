import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMyPosts } from "./api/requests";

function Home() {
    const { user } = useContext(AuthContext);
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const posts = await getMyPosts(user.token);
            setPostsList(posts);
        }
        if (user)
            getPosts();
        return () => setPostsList([]);
    }, [user])

    return (
        <>
            <p>{user?.username}</p>
            <div className="posts-container">
                {postsList.map((post) => {
                    return <div key={post.id} className="post">
                        <p>{post.id}</p>
                        <p className="post-title">{post.title}</p>
                        <p className="multi-line-truncate">{post.content}</p>
                        <hr className="posts-separator" />
                    </div>
                })}
            </div>

        </>
    )
}

export default Home;