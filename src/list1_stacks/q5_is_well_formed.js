import Stack from '../structures/stack';

// "funções" para verificar se o char está abrindo ou fechando
const opening = (char) => char == '(' || char == '[' || char == '{';
const closing = (char) => char == ')' || char == ']' || char == '}';

// "função" para ver se o topo da pilha e o novo char dão match kkkkkkk
function match(open, close){
    return (open == '(' && close == ')') || (open == '[' && close == ']') || (open == '{' && close == '}');
}

export default function checkFormula(formula){
    let stack = new Stack(12);

    for(let char of formula){ // laço que percorre a formula enviada por parametro
        if(opening(char)){
            //se for abrindo apenas coloca na pilha
            stack.push(char);
        } else if(closing(char)){
            // se for fechando e a pilha estiver vazia, retorna false
            if(stack.isEmpty()){
                return false; // mal formada
            }
            //se for fechando verifica se dão match, se sim apaga o anterior da pilha, se não retorna false
            if(match(stack.top(), char)){
                stack.pop();
            }else {
                return false; // mal formada
            }
        }
    }
    return true; // bem formada
}