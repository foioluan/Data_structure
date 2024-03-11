import Queue from '../structures/queue';

export default function intercalateQueues (queue1, queue2) {
    let maxSize = queue1.maxSize + queue2.maxSize
    let finalQueue = new Queue(maxSize);

    while(!queue1.isEmpty() || !queue2.isEmpty()){
        if(!queue1.isEmpty()){
            finalQueue.enqueue(queue1.dequeue());
        }
        if(!queue2.isEmpty()){
            finalQueue.enqueue(queue2.dequeue());
        }
    }

    return finalQueue.toString();
}