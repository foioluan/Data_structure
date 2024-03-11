export default class Queue{
    constructor(maxSize){
        this.maxSize = maxSize;
        this.data = [];
        this.begin = 0;
        this.end = 0;
    }

    enqueue(element){
        if(this.isFull()){
            throw new Error('QueueOverflow');
        }

        this.data[this.end++] = element;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('QueueUnderflow');
        }

        return this.data[this.begin++];
    }

    isFull(){
        return this.length() === this.maxSize;
    }

    isEmpty(){
        return this.length() === 0;
    }

    length(){
        if(this.begin === this.end){
            return 0
        }

        return this.end - this.begin;
    }

    front(){
        if(this.isEmpty()){
            throw new Error('Empty queue');
        }

        return this.data[this.begin];
    }

    clear(){
        this.begin = this.end = 0;
    }

    toString(){
        if(this.isEmpty()){
            throw new Error('Empty queue');
        }
        let string = '';
        for(let i = this.begin; i < this.end; i++){
            string += this.data[i];
        }

        return string;
    }
}