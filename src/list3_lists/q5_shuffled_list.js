import List from "../structures/list";

export default function shuffleList(list){
    let array = list.asArray();
    let shuffledArray = shuffleArray(array);

    let shuffledList = new List();

    for(let i = 0; i < shuffledArray.length; i++){
        shuffledList.add(shuffledArray[i]);
    }

    let string = shuffledList.toString();
    return string;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}