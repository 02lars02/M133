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
            queue.add("object");
            const result = queue.size();
            expect(result).to.equal(1);
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