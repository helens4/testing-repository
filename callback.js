const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach(post => {
            output += `<li> ${post.title} ${post.body} </li>`
        })

        document.body.innerHTML = `<ul> ${output} </ul>`;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}


//getPosts()

createPost({ title: 'post three', body: 'this is post three' }, getPosts)

//temp



