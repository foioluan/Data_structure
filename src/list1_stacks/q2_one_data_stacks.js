export default class oneDataStacks{
    constructor(maxSize){
        this.maxSize = maxSize;
        this.data = [];
        this.topIndexA = -1;
        this.topIndexB = maxSize;
    }

    pushA(element){
        if(this.isFull()){
            throw new Error('StackOverflow');
        }

        this.data[++this.topIndexA] = element;
    }

    pushB(element){
        if(this.isFull()){
            throw new Error('StackOverflow');
        }

        this.data[--this.topIndexB] = element;
    }

    popA(){
        if(this.isEmptyA()){
            throw new Error('StackUnderflow');
        }

        return this.data[this.topIndexA--];
    }

    popB(){
        if(this.isEmptyB()){
            throw new Error('StackUnderflow');
        }

        return this.data[this.topIndexB++];
    }

    topA(){
        if(this.isEmptyA()){
            throw new Error('Empty stack');
        }

        return this.data[this.topIndexA];
    }

    topB(){
        if(this.isEmptyB()){
            throw new Error('Empty stack');
        }

        return this.data[this.topIndexB];
    }

    toStringA(){
        if(this.isEmptyA()){
            throw new Error('Empty stack');
        }

        let string = '';
        for(let i = 0; i <= this.topIndexA; i++){
            string += this.data[i];
        }

        return string;
    }

    toStringB(){
        if(this.isEmptyB()){
            throw new Error('Empty stack');
        }

        let string = '';
        for(let i = this.maxSize - 1; i >= this.topIndexB; i--){
            string += this.data[i];
        }

        return string;
    }

    clearA(){
        return this.topIndexA = -1;
    }

    clearB(){
        return this.topIndexB = this.maxSize;
    }

    sizeA(){
        return this.topIndexA + 1;
    }

    sizeB(){
        return this.maxSize - this.topIndexB
    }

    isEmptyA(){
        return this.sizeA() === 0;
    }

    isEmptyB(){
        return this.sizeB() === 0;
    }

    isFull(){
        return this.sizeA() + this.sizeB() === this.maxSize;
    }
}

