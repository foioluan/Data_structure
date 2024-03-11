import Stack from '../structures/stack';

export default class twoStacksQueue {
    constructor(maxSize = 5){
        stack = new Stack(maxSize);
        stackAux = new Stack(maxSize);
    }

    enqueue(element){
        if(this.isFull()){
            throw new Error('QueueOverflow');
        }

        this.stack.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('QueueUnderflow');
        }

        let front;
        transfer(stack, stackAux, 1);
        front = stack.pop();
        transfer(stackAux, stack, 0);

        return front;
    }

    isFull(){
        return this.stack.isFull();
    }

    isEmpty(){
        return this.stack.isEmpty();
    }

    length(){
        return this.stack.size();
    }

    front(){

    }

    clear(){
        this.stack.clear();
    }

    toString(){
        return this.stack.toString();
    }
}

function transfer(begin, end, n){
    while(begin.size() > n){
        end.push(begin.pop());
    }
}