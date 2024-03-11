import Stack from '../structures/stack';

export default function invertExtremities(stack){
    let aux1 = new Stack(stack.maxSize);
    let aux2 = new Stack(stack.maxSize);

    aux1.push(stack.pop());
    while(stack.size() > 1){
        aux2.push(stack.pop());
    }
    while(!aux2.isEmpty()){
        aux1.push(aux2.pop());
    }
    aux1.push(stack.pop());

    return aux1.toString();
}