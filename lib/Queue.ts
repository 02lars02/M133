import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    queue: any[] = [];

    public size(): number {
        return this.queue.length;
    }

    public enqueue(object: any): void {
        this.queue.push(object);
    }

    public peek(): any {
        return this.queue[0];
    }

    public poll(): any {
        const oldQueue = this.queue;
        this.queue = [];
        for(let index = 1; index < oldQueue.length; index++) {
            this.enqueue(oldQueue[index]);
        }
        return oldQueue[0];
    }
}