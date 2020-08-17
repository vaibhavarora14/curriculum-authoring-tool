class Node {
    id;
    name;
    parent;
    previous;
    next;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

export default Node;