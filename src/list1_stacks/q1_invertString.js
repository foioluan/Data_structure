import Stack from '../structures/stack';

export default function invertString(string){
    let stack = new Stack(string.length);
    for(let i = 0; i < string.length; i++){
        stack.push(string[i]);
    }
    
    let finalString = '';
    while(!stack.isEmpty()){
        finalString += stack.pop();
    }
    
    return finalString;
}