class Queue {
	constructor() {
		this._items = [];
		this._head = 0;
		this._tail = 0;
	}

	empty() {
		if (this._tail === this._head) {
			return true;
		}
	}

	enqueue(el) {
		this._items[this._tail] = el;
		this._tail++;
	}

	dequeue() {
		if (this.empty()) return null;
		const el = this._items[this._head];
		this._head++;
		return el;
	}

	peek() {
		if (this.empty()) return null;
		return this._items[this._head];
	}
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());
queue.dequeue();

console.log(queue.peek());
