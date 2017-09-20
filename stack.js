class Stack {
	constructor() {
		this.items = [];
		this.top = -1;
	}

	push(el) {
		this.top++;
		this.items[this.top] = el;
		// items[items.length] = el;
	}

	pop() {
		if (this.top < 0) {
			return null;
		}

		let el = this.items[this.top];
		this.top--;

		return el;
	}

	peek() {
		if (this.top < 0) {
			return null;
		}

		return this.items[this.top];
	}
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());

stack.pop();

console.log(stack.peek());
