export class Post {
    title;
    body;
    #id;

    constructor(title, body, id) {
        this.title = title;
        this.body = body;
        this.#id = id;
    }

    getPreview(length) {
        return this.body.slice(0, length);
    }

    get id() {
        return this.#id;
    }
}