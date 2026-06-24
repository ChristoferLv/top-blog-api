const BASE_URL = "http://localhost:3000"

async function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.pathname = "/login";
}

async function getMyPosts() {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(BASE_URL + '/posts/my', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function makePost(postData) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(BASE_URL + '/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function getPostById(postId) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(BASE_URL + '/posts/' + postId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function updatePost(postId, newData) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(BASE_URL + '/posts/' + postId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(newData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function deletePost(postId) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(BASE_URL + '/posts/' + postId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function getCommentsOfPost(postId) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(BASE_URL + '/posts/' + postId + "/comments", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function makeComment(postId, commentContent) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(BASE_URL + '/posts/' + postId + "/comments", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ content: commentContent })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}


export {
    getMyPosts,
    makePost,
    getPostById,
    updatePost,
    deletePost,
    logOut,
    getCommentsOfPost,
    makeComment
}