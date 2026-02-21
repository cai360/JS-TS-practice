/**
 Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 */

class Mystack{
    private q1: number[];
    private q2: number[];
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(x: number){
        this.q2.push(x);
        while(this.q1.length > 0){
            let shift= this.q1.shift();
            if(shift !== undefined){
                this.q2.push(shift);
            }    
        }  
        this.q1 = this.q2;
        this.q2 = [];  
    }

    pop(){
        return this.q1.shift()
    }

    top(){
        return this.q1[0];

    }
    empty(){
        return this.q1.length === 0;
    }

}