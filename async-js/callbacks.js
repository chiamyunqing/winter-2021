const posts = [
    {title: 'Post one', body: 'Post one yos'},
    {title: 'Post two', body: 'Post two yos'},
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//callback
function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPosts({title: `Post three`, body: `post three yos`}, getPosts);