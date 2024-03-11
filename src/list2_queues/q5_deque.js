// ta errada, não consegui fazer

export default class Deque{
    constructor(maxSize){
        this.maxSize = maxSize;
        this.data = [];
        this.beginFront = maxSize;
        this.endFront = maxSize;
        this.beginBack = 0;
        this.endBack = 0;
    }

    enqueueBack(element){
        if(this.isFull()){
            throw new Error('QueueOverflow');
        }

        this.data[this.endBack++] = element;
    }

    enqueueFront(element){
        if(this.isFull()){
            throw new Error('QueueOverflow');
        }

        this.data[this.endFront--] = element;
    }

    dequeueFront(){
        if(this.isEmpty()){
            throw new Error('QueueUnderflow');
        }

        return this.data[this.beginFront--];
    }

    dequeueBack(){
        if(this.isEmpty()){
            throw new Error('QueueUnderflow');
        }

        return this.data[this.beginBack++];
    }

    isEmpty(){
        if((this.beginFront == 0 && this.endFront == 0) && (this.beginBack == this.maxSize && this.endBack == this.maxSize)){
            return true;
        }
        return false;
    }

    isFull(){
        if(isPar(this.maxSize)){
            if((this.endBack + this.endFront == this.maxSize) && this.endBack != 0){
                return true;
            }
            return false;
        } else {
            if(this.endBack + this.endFront > this.maxSize){
                return true;
            }
            return false;
        }
    }

    toString() {
        if (this.isEmpty()) {
            throw new Error('Empty queue');
        }
    
        let string = '';
        for (let i = this.beginFront; i < this.endBack; i++) {
            const adjustedIndex = i % (2 * this.maxSize); // Ajuste para circularidade
    
            if (this.data[adjustedIndex] !== undefined) {
                string += this.data[adjustedIndex];
            }
        }
    
        return string;
    }
    
    
}

function isPar(n){
    if(n%2 == 0){
        return true;
    }
    return false;
}