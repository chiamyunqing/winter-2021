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

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error!');
            }
        }, 2000);
    })



}

//promise
createPosts({title: `Post three`, body: `post three yos`})
.then(getPosts).catch(err => {
    console.log(err);
});

//Promise all
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

//take as long as the longest promise
Promise.all([promise1, promise2, promise3, promise4])
.then(values => console.log(values));


//async-await -> cleaner way of doing promises
async function init() {
    await createPosts({title: `Post four`, body: `post four yos`});
    getPosts();
}

init();

