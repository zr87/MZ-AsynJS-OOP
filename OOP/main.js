import {Post} from "./classes/Post.js";
import {User} from "./classes/User.js";

let post1 = new Post("lorem", "lorem ipsum dolor sit", 1);
console.group("Post class");
console.log("getPreview:", post1.getPreview(5));
console.groupEnd();

//test USer class
const user1 = new User("Doe", "John", "johndoe@nasa.com");

console.group("User class");
console.log("user email:", user1.email);
console.log("user full name:", user1.fullname);
console.groupEnd();



