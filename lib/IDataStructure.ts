export interface IDataScructure {
    size(): number;
    enqueue(any): void;
    peek(): any;
    poll(): any;
    isEmpty(): boolean;
}