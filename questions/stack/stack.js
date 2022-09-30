// Implementation of a Stack

class Stack {
    constructor() {
        this.items = [];
    }
    
    // push function
    push(element) {
        // push element into the items
        this.items.push(element);
    }

    // pop function
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // peek function , get the top element
    getTop() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    // getSize function
    getSize() {
        // return true if stack is empty
        return this.items.length;
    }

    // isEmpty function
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }

    // printStack function
    print() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}

let stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.pop()
console.log("Top Element in stack - "+stack.getTop())
console.log("Stack - "+stack.print())
console.log("Length of stack - "+stack.getSize())
console.log(stack)
console.log("Is stack empty - "+stack.isEmpty())