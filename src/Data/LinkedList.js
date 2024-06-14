import { Node } from "./Node.js";

export class LinkedList {
    #count
    #head

    constructor(){
        this.#head = null
        this.#count = 0
    }

    getHead(){
        return this.#head
    }
    isEmpty(){
        return this.#head === null
    }
    push(item){
        let node = new Node(item, this.#head, null)
        if(this.#head){
            node.next = this.#head
            this.#head.prev = node 
            this.#head = node
        }else{
            this.#head = node
        }
        this.#count++
    }
}
