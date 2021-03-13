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
console.group("Blog class");
console.log("blog1.posts", blog1.posts);
console.groupEnd();

console.group("Blog class - addPost()");
blog1.addPost(post1);
console.log("posts:", blog1.posts);
console.groupEnd();

console.group("Blog class - deletePost(id)");
blog1.deletePost(1);
console.log("posts:", blog1.posts);
console.groupEnd();

console.log("static", Blog.API_URL );

console.group("Blog class - getPotsById(postId)");
console.log("posts:", blog1.getPotsById("w"));
console.groupEnd();

