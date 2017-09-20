class Node {
	constructor(data) {
		this.data = data;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor(nodes) {
		if (!Array.isArray(nodes)) {
			throw new Error('You must pass in an array of Nodes');
		}

		this.head = nodes[0];
		this.tail = nodes[nodes.length - 1];

		for (let i = 0, len = nodes.length - 1; i < len; i++) {
			nodes[i].nextNode = nodes[i + 1];
		}
	}

	readNode(index) {
		let counter = 0;
		let currentHead = this._head;

		while (counter < index) {
			if (currentHead.nextNode === null) {
				return null;
			}

			currentHead = currentHead.nextNode;
			counter++;
		}

		return currentHead.data;
	}

	insert(data, index) {
		let node = new Node(data);

		if (index === 0) {
			node.nextNode = this.head;
			this.head = node;
			return node;
		}

		let counter = 0;
		let currentHead = this.head;

		while (counter < index - 1) {
			if (currentHead.nextNode === null) {
				return null;
			}
		}
	}
}

const node = new Node('hello');
const linkedList = new LinkedList([node]);

console.log(linkedList.readNode(0));
