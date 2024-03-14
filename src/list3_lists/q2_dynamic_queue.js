import List from "../structures/list";

export default class DynamicQueue {
    constructor(){
        this.list = new List();
    }

    enqueue(element){
        this.list.add(element);
    }

    dequeue(){
        return this.list.removeFirst();
    }

    toString(){
        return this.list.toString();
    }
}