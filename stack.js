class Stack {
	constructor() {
		this._items = [];
		this._top = -1;
	}

	empty() {
		if (this._top < 0) {
			return true;
		}
	}
	push(el) {
		this._top++;
		this._items[this._top] = el;
	}

	pop() {
		if (this.empty()) return null;

		let el = this._items[this._top];
		this._top--;

		return el;
	}

	peek() {
		if (this.empty()) return null;
		return this._items[this._top];
	}
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());

stack.pop();

console.log(stack.peek());
