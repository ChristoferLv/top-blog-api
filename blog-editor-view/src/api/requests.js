const BASE_URL = "http://localhost:3000"


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
        return data.posts;
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


export {
    getMyPosts,
    makePost
}