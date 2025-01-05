class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }
    
    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let data = new LinkList();
data.add("Foridul");
data.add("Rupaly");
data.add("Milon");
data.add("Mithun");
data.display();

class Node2 {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    addStart(data) {
        let newNode = new Node2(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    
    addEnd(data) {
        let newNode = new Node2(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail; // Link the new node to the current tail
            this.tail.next = newNode; // Link the current tail to the new node
            this.tail = newNode; // Update the tail reference
        }
    }
    
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    
    
}

let mydata = new DoublyLinkList();
mydata.addStart(10);
mydata.addStart(20);
mydata.addStart(30);
mydata.addStart(40);
mydata.addEnd(100);
mydata.display();
