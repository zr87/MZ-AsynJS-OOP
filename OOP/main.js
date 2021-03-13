import {Post} from "./classes/Post.js";
import {User} from "./classes/User.js";
import {Blog} from "./classes/Blog.js";

let post1 = new Post("lorem", "lorem ipsum dolor sit", 1);
console.group("Post class");
console.log("getPreview:", post1.getPreview(5));
console.groupEnd();

//test USer class
const user1 = new User("Doe", "John", "johndoe@nasa.com");


console.log("user email:", user1.email);
console.log("user full name:", user1.fullname);
console.groupEnd();

const blog1 = new Blog("My blog" , user1);

/*
console.group("Blog class - get posts async");
console.log("blog1.posts");
blog1.posts.then(data => {
    console.log("posts", data);
});
console.groupEnd();
*/

/*
console.group("Blog class - addPost() async ");
blog1.addPost(post1);
blog1.posts.then(data => {
    console.log("posts", data);
});
console.groupEnd();
*/


/*console.group("Blog class - deletePost(id)");
console.log("blog1.deletePost(54);");
blog1.deletePost(54).then(value => console.log("value:", value));

blog1.posts.then(data => {
    console.log("posts", data);
});
console.groupEnd();*/


/*console.log("static", Blog.API_URL );*/

/*
console.group("Blog class - async  getPotsById(postId)");
const postId = -1;
blog1.getPotsById(postId).then(item => {
    console.log(`post item with id: ${postId}, found item: `,  item);
})

console.log("posts:", blog1.getPotsById("w"));
console.groupEnd();
*/

