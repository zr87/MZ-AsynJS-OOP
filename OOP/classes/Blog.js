import {Post} from "./Post.js";

export class Blog {
    #title;
    #author;
    #posts = [];
    #postsPromise;

    static API_URL = "https://jsonplaceholder.typicode.com";

    constructor(title, author) {
        this.#title = title;
        this.#author = author;

        this.#fetchPosts();
    }

    #fetchPosts() {
        this.#postsPromise = new Promise((resolve, reject) => {
            fetch(Blog.API_URL + "/posts")
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    } else return response.json();
                })
                .then(data => {
                    data.forEach(item => {
                        this.#posts.push(new Post(item.title, item.body, item.id));
                    });
                    resolve();
                })
                .catch(error => {
                    reject();
                    console.error(error);
                });
        });
    }

    get posts() { // Promise-t adunk vissza
        return this.#postsPromise
            .then(() => this.#posts)
            .catch(error => console.error(error));
    }

    get title() {
        return this.#title;
    }

    addPost(postItem) {
        return this.#postsPromise
            .then(() => {
                if (postItem instanceof Post) {
                    this.#posts.push(postItem);
                } else throw new Error("postItem is not an instance of Post class!");
            })
            .catch(error => console.error(error));
    }

    deletePost(postId) {
        return this.#postsPromise
            .then(() => {
                const indexToDelete = this.#posts.findIndex(item => item.id === postId)

                if (indexToDelete) {
                    this.#posts.splice(indexToDelete, 1);
                    return true;
                } else return false;
            })
            .catch(error => console.error(error));
    }

    getPotsById(postId) {
        return this.#postsPromise
            .then(() => {
                if (Number.isInteger(postId)) {
                    return this.#posts.find(item => item.id === postId) || null;
                } else throw new Error(`postId "${postId}" is not a number!`)
            })
            .catch(error => console.error(error));
    }
}
