import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    queue: any[] = [];

    public size(): number {
        return this.queue.length;
    }

    public add(object: any): void {
        this.queue.push(object);
    }

    public peek(): any {
        const lastIndex = this.queue.length - 1;
        return this.queue[lastIndex];
    }
}