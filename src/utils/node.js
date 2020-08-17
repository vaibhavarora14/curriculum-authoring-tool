import { randomString } from "./string";

class Node {
    id;
    name;
    parent;
    previous;
    next;

    constructor(name) {
        this.id = randomString(7);
        this.name = name;
    }
}

export default Node;