import Queue from '../structures/queue';

export default class twoQueuesStack {
    constructor(maxSize = 5){
        queue = new Queue(maxSize);
        queueAux = new Queue(maxSize);
    }

    push(element){
        if(this.isFull()){
            throw new Error('StackOverflow');
        }

        queue.enqueue(element);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('StackUnderflow');
        }
        
        let top;
        transfer(queue, queueAux, 1);
        top = queue.dequeue();
        transfer(queueAux, queue, 0);

        return top;
    }

    top(){
        if(this.isEmpty()){
            throw new Error('StackUnderflow');
        }
        
        let top;
        transfer(queue, queueAux, 1);
        top = queue.front();
        transfer(queueAux, queue, 0);

        return top;
    }

    isEmpty(){
        return this.queue.isEmpty();
    }

    isFull(){
        return this.queue.isFull();
    }

    size(){
        return this.queue.size();
    }

    clear(){
        return this.queue.clear();
    }

    toString(){
        return this.queue.toString();
    }
}

function transfer(begin, end, n){
    while(begin.size() > n){
        end.enqueue(begin.dequeue());
    }
}