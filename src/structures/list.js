class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export default class List {
    constructor(){
        this.head = new Node(null);
    }

    add(element) {
        let newNode = new Node(element);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    append(element) {
        let newNode = this.head;

        while(newNode.next != null){
              newNode = newNode.next;
        }

        newNode.next = new Node(element);
    }

    addAt(element, index) {
        if(index >= this.length()){
            this.append(element);
            return;
        } else if(index <= 0) {
            this.add(element);
            return;
        } 

        let newNode = new Node(element);
        let nodeAux = this.head.next;
        let i = 1;

        while(i < index) {
            nodeAux = nodeAux.next;
            i++;
        }

        newNode.next = nodeAux.next;
        nodeAux.next = newNode;
    }

    removeFirst() {
        if(this.isEmpty()){
            throw new Error('ListUnderflow');
        }
        let nodeAux;
        nodeAux = this.head.next;
        let removed = nodeAux;
        this.head.next = nodeAux.next;

        return removed;
    }

    removeLast() {
        if(this.isEmpty()){
            throw new Error('ListUnderflow');
        }

        let node_a = this.head;
        let node_b = node_a;

        while(node_a.next != null){
            node_b = node_a;
            node_a = node_a.next;
        }

        let removed = node_a;
        node_b.next = null;

        return removed;
    }

    removeAt(index) {
        if(this.isEmpty()){
            throw new Error('Empty list');
        }

        if(index >= this.length){
            this.removeLast();
            return;
        } else if(index <= 0){
            this.removeFirst();
            return;
        }

        let node_a = this.head.next;
        let node_b = node_a;
        let node_c;
        let i = 1;

        while(i < index) {
            node_c = node_a.next;
            node_b = node_a;
            node_a = node_a.next;
            i++;
        }

        let removed = node_a;
        node_b.next = node_c.next;

        return removed;
    }

    getHead() {
        return this.head;
    }

    get(index) {
        if(this.isEmpty()){
            throw new Error('Empty list');
        }

        let nodeAux = this.head.next;
        let i = 1;

        while(i < index){
            nodeAux = nodeAux.next;
            i++
        }

        return nodeAux.data;
    }

    search(element) {
        if(this.isEmpty()){
            throw new Error('Empty list');
        }

        let nodeAux = this.head.next;

        while(nodeAux != null){
            if(nodeAux.data == element){
                return nodeAux.data;
            }
            nodeAux = nodeAux.next;
        }

        return false;
    }

    isEmpty() {
        return this.length() === 0;
    }

    length() {
        let i = 0;
        let nodeAux = this.head.next;

        while(nodeAux != null) {
            i++;
            nodeAux = nodeAux.next;
        }

        return i;
    }

    clear() {
        this.head.next = null;
    }

    asArray() {
        let array = [];
        let nodeAux = this.head.next;

        while(nodeAux != null){
            array.push(nodeAux.data);
            nodeAux = nodeAux.next;
        }

        return array;
    }

    toString(){
        let string = '';
        let nodeAux = this.head.next;

        while(nodeAux != null){
            string += nodeAux.data;
            nodeAux = nodeAux.next;
        }

        return string;
    }
}
