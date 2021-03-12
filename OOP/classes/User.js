export class User {
    #lastName;
    #fistName;
    #email;

    constructor(lastName, firstName, email) {
        this.#lastName = lastName;
        this.#fistName = firstName;
        this.#email = email;
    }

    get fullname() {
        return `${this.#fistName} ${this.#lastName}`;
    }

    get email() {
        return this.#email;
    }
}