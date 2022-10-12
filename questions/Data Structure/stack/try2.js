
// javascript Code for Linked List Implementation

var root;

	class StackNode {

		constructor(data) {
			this.data = data;
			this.next = null;
		}
	}

	function isEmpty() {
		if (root == null) {
			return true;
		} else
			return false;
	}

	function push(data) {
		var newNode = new StackNode(data);

		if (root == null) {
			root = newNode;
		} else {
			var temp = root;
			root = newNode;
			newNode.next = temp;
		}
		console.log(data + " pushed to stack");
	}

	function pop() {
		var popped = Number.MIN_VALUE;
		if (root == null) {
			console.log("Stack is Empty");
		} else {
			popped = root.data;
			root = root.next;
		}
		return popped;
	}

	function peek() {
		if (root == null) {
			console.log("Stack is empty");
			return Number.MIN_VALUE;
		} else {
			return root.data;
		}
	}

	// Driver code
		push(10);
		push(20);
		push(30);

		console.log(pop() + " popped from stack");

		console.log("Top element is " + peek());

// This code is contributed by Rajput-Ji
