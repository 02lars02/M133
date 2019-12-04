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
}