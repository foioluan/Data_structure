import List from "../structures/list";

export default class DynamicStack {
    constructor(){
        this.list = new List();
    }

    push(element){
        this.list.append(element);
    }

    pop(){
        return this.list.removeLast();
    }

    toString(){
        return this.list.toString();
    }
}