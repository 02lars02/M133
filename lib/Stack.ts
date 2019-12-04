import { IDataScructure } from "./IDataStructure";

export class Stack implements IDataScructure {
    queue: any[] = [];

    public size(): number {
        return this.queue.length;
    }

    public enqueue(object: any): void {
        this.queue.push(object);
    }

    public peek(): any {
        const lastIndex = this.queue.length - 1;
        return this.queue[lastIndex];
    }

    public poll(): any {
        const removedObject = this.queue.pop();
        return removedObject;
    }

    public isEmpty(): boolean {
        if(this.queue.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}