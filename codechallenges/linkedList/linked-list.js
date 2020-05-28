'use strict';

/*
creating a Node class:
--> a property for the value stored in the Node
--> a pointer to the next Node
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//////////////////////////////////////////////

/*
creating a Linked List class:
--> a head property initially with an empty value => to create an empty linked list
--> an insert method that given a value, adds a Node with this value to the head of the list (add to the beginning of the list)
--> an includes method that given a value, checks if this value exists as a Node's value and returns a boolean
*/

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    includes(value) {
        let currentHead = this.head;
        while(currentHead) {
          if (currentHead.value === value) return true;
          currentHead = currentHead.next;        
        }
        return false;
    }
}
