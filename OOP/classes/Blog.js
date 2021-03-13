import {Post} from "./Post.js";

export class Blog {
    #title;
    #author;
    #posts = [];

    static API_URL = "https://jsonplaceholder.typicode.com";

    constructor(title, author) {
        this.#title = title;
        this.#author = author;

        this.#fetchPosts();
    }

    #fetchPosts() {
        fetch(Blog.API_URL  + "/posts")
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    this.#posts.push(new Post(item.title, item.body, item.id));
                })
                console.log("data", this.posts);
            });
    }

    get posts() {
        return this.#posts;
    }

    get title() {
        return this.#title;
    }

    addPost(postItem) {
        if (postItem instanceof Post) {
            this.#posts.push(postItem);
        } else throw new Error("postItem is not an instance of Post class!");
    }

    deletePost(postId) {
        const indexToDelete = this.posts.findIndex(item => item.id === postId)

        if (indexToDelete) {
            this.#posts.splice(indexToDelete, 1);
            return true;
        } else return false;
    }

    getPotsById(postId) {
        if (Number.isInteger(postId)) {
            return this.posts.find(item => item.id === postId) || null;
        } else throw new Error(`postId "${postId}" is not a number!`)
    }
}
