export class Item {
    public id: string;
    public name: string;
    public value: number;

    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.value = options.value;
    }
};