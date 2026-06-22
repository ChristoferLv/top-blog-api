import { use, useContext } from "react";
import { AuthContext } from "./AuthContext";

function PostView(){
    const { user } = useContext(AuthContext);
    return <h1>Hello {user?.username}</h1>
}

export default PostView;