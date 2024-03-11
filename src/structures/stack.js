export default class Stack{
    constructor(maxSize){
        this.maxSize = maxSize;
        this.data = [];
        this.topIndex = -1;
    }

    push(element){
        if(this.isFull()){
            throw new Error('StackOverflow');
        }

        this.data[++this.topIndex] = element;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('StackUnderflow');
        }

        return this.data[this.topIndex--];
    }

    top(){
        if(this.isEmpty()){
            throw new Error('Empty stack');
        }

        return this.data[this.topIndex];
    }

    toString(){
        if(this.isEmpty()){
            throw new Error('Empty stack');
        }

        let string = '';
        for(let i = 0; i <= this.topIndex; i++){
            string += this.data[i];
        }
        return string;
    }

    clear(){
        this.topIndex = -1;
    }

    size(){
        return this.topIndex + 1;
    }

    isEmpty(){
        return this.size() === 0;
    }

    isFull(){
        return this.size() === this.maxSize;
    }
}