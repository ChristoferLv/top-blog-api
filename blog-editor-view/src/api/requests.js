const BASE_URL = "http://localhost:3000"


async function getMyPosts(token) {
    try {
        const response = await fetch(BASE_URL+'/posts/my', {
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


export {
    getMyPosts
}