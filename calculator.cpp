//Calculator cuz i dont have one on arch
/*
I would like a GUI pls thx

As of 130224, calculator can only do basic arithmetic with 2 operands

End deliverables:
1. GUI
2. Multiple operands
3. Multiple operations (execute in order)
*/

#include <iostream>

//a stack to help with order of operations
class stack{
    int top = -1;
    int max = 30

    public:
    char s[max];
    //stack with max size 20

    bool push(char x);
    char pop();
    bool isEmpty();
}

bool stack::push(char x){
    if (top >= max - 1){
        std::cout << "Stack overflow" << std::endl;
        return false;
    }
    else{
        s[++top] = x;
        return true;
    }
}

std::string stack::pop(){
    if (top < 0){
        std::cout << "Stack underflow" << std::endl;
        return 'f';
    }
    else{
        char out = s[top];
        top--;
        return out;
    }
}

char stack::peek(){
    return s[top];
}

bool stack::isEmpty(){
    return (top < 0);
}

//does main calculation, handles order of operations and returns result
double calc(char op){
    using namespace std;
    std::string input;
    
    cin >> input;

    class stack nums;
    class stack ops;

    double num1;
    //push inputs into stack and executes * and / in first loop through
    while(char& c : input){
        std::string numStr = '';
        //in case num has multiple digits
        if (std::isdigit(c)){
            numStr.append(c);
        }
        else{

            //check if * or / was the last operation
            if (ops.peek() == '*'){
                num1 = std::stod(nums.pop());
                num2 = std::stod(numStr);
                numStr = std::to_string(num1*num2);
                lastOp = ops.pop();
            }
            else if (ops.peek() == '/'){
                num1 = stod(nums.pop());
                num2 = stod(numStr);
                numStr = std::to_string(num1/num2);
                lastOp = ops.pop();
            }
            else{
                //pass
            }

            nums.push(numStr);  //Push the result as the latest numStr

            if (c == ' '){
                //pass
            }
            else{
                ops.push(c);
            }
        }
    }

    //second loop through to execute remaining ops
    while (!ops.isEmpty() && !nums.isEmpty()){
        op = ops.pop();
        num2 = std::stod(nums.pop());
        num1 = std::stod(nums.pop());
        switch(op){
            case '+':
                result = num1 + num2;

            case '-':
                result = num1 - num2;
        }
    }
}

//runs the main loop, requests for operation and outputs result
int main(){
    char op = 's';
    //s for start
    double result;
    string getOp = "Enter an operation ('+', '-', '*', '/'): ";
    do{
        result = calc(op);
        std::cout << result << std::endl;
        string getOp = "Enter an operation ('+', '-', '*', '/', 'x' to exit): ";
        cin >> op;
    }
    while(op != 'x')
}

