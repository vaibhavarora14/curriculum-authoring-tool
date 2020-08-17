import { randomString } from "./string";

class Node {
    id;
    name;
    level;
    previous;
    next;

    constructor(name) {
        this.id = randomString(7);
        this.name = name;
    }
}

export default Node;