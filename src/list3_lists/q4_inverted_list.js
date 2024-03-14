import List from "../structures/list";

export default function invertList(list){
    let copiedList = new List();

    for(let i = 1; i <= list.length(); i++){
        copiedList.append(list.get(i));
    }

    let invertedList = new List();

    while(!copiedList.isEmpty()){
        invertedList.append(copiedList.removeLast().data);
    }

    return invertedList;
}
