import { Field } from "./Field";

class Fields {
    constructor(public mainFields: Field[] = [], public checklistFields: Field[] = []) {}
}

export { Fields }