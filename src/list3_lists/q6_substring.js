import List from "../structures/list";

export default function substring(list, indexA, indexB){
    let listArray = list.asArray();
    let subArray = [];

    if(indexA < indexB){
        for(let i = indexA; i <= indexB; i++){
            subArray.push(listArray[i - 1])
        }
    } else if(indexA > indexB){
        for(let i = indexA; i >= indexB; i--){
            subArray.push(listArray[i - 1]);
        }
    } else {
        return list.get(indexA);
    }

    let subList = new List();
    
    for(let i = 0; i < subArray.length; i++){
        subList.add(subArray[i]);
    }

    let string = subList.toString();
    return string;
}