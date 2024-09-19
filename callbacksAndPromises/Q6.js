function fetchUserDataAndPosts(userID) {
    return fetch('https://jsonplaceholder.typicode.com/users/${userId}')
        .then((response) => response.json())
        .then((userdata) => {
            return fetch('https://jsonplaceholder.typicode.com/posts?userId=${userId}')
                .then((response) => response.json())
                .then((post) => ({ user: userdata, post }))
        });
}

fetchUserDataAndPosts(1)
    .then((result) => console.log(result))