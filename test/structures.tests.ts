import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const queue = new Queue();
            const result = queue.size();
            expect(result).to.equal(0);
        })

        it("add object", () => {
            const queue = new Queue();
            queue.enqueue("object");
            const result = queue.size();
            expect(result).to.equal(1);
        });
        
        it("get last added object", () => {
            const queue = new Queue();
            queue.enqueue("object1");
            queue.enqueue("object2");
            queue.enqueue("object3");
            const result = queue.peek();
            expect(result).to.equal("object1");
        });
        
        it("poll item from queue", () => {
            const queue = new Queue();
            queue.enqueue("object1");
            queue.enqueue("object2");
            queue.enqueue("object3");
            const pollResult = queue.poll();
            const indexZero = queue.peek();
            const size = queue.size();
            expect(pollResult).to.equal("object1");
            expect(indexZero).to.equal("object2");
            expect(size).to.equal(2);
        });
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})