import { ObjectId } from "mongodb";

export default class Term {
    constructor(public term: string, public definition: string, public tags: Array<string>, public id?: ObjectId) {
        
    }
}