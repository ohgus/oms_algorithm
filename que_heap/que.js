class QUEUE {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailInedx = 0;
    }
    enqueue(item) {
        this.items[this.tailInedx] = item;
        this.tailInedx++;
    }
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    peek() {
        return this.items[this.headIndex];
    }
    getLength() {
        return this.tailInedx - this.headIndex;
    }
}