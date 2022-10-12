class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop();
    }
    print(){
        let ans = ""
        for(let i=this.stack.length-1;i>=0;i--){
            console.log(this.stack[i])
        }
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
return stack.print()
