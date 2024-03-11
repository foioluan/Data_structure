import Stack from '../structures/stack';

export default function decToBin(n){
    let stack1 = new Stack(10);
    let stack2 = new Stack(stack1.maxSize);

    let aux;

    while(n!=1){
        aux = (n%2);
        n = parseInt((n/2));
        stack1.push(aux);
    }
    stack1.push(n);

    while(!stack1.isEmpty()){
        stack2.push(stack1.pop());
    }

    return stack2.toString();
}