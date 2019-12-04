import { DataStructures } from "./DataStructuresEnum";
import { Queue } from "./Queue";
import { Stack } from "./Stack";


export class DataStructureFactory {
    public static create(dataEnum: DataStructures) {
        if(dataEnum == DataStructures.Queue) {
            return new Queue();
        } else {
            return new Stack();
        }
    }
}