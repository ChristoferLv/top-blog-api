import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMyPosts } from "./api/requests";

function PostView() {
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
    console.log("render")

    return (
        <>
            <p>{user?.username}</p>
            {postsList.map((post) => {
                return <div key={post.id} className="postCard">
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </div>
            })}

        </>
    )
}

export default PostView;