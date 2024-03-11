import Stack from '../structures/stack';

const isOperator = (char) => char == '+' || char == '-' || char == '*' || char == '/' || char == '^';
const priority = { '+': 1, '-': 1, '*': 2, '/': 2, '^':1 };

export default function rpnConverter(expression) {
    let stack = new Stack(32);
    let rpn = '';

    const addOperator = (operator) => {
        while (!stack.isEmpty() && priority[stack.top()] >= priority[operator]) {
            rpn += stack.pop();
        }

        stack.push(operator);
    };

    const isNumber = (x) => {
        return !isNaN(Number(x));
    };

    const isLetter = (x) => {
        return isNaN(Number(x)) && x.toUpperCase() !== x.toLowerCase();
    }

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (isNumber(char) || isLetter(char)) {
            rpn += char;
        } else if (isOperator(char)) {
            addOperator(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (!stack.isEmpty() && stack.top() !== '(') {
                rpn += stack.pop();
            }
            stack.pop();
        }
    }

    while (!stack.isEmpty()) {
        rpn += stack.pop();
    }

    return rpn.trim();
}
