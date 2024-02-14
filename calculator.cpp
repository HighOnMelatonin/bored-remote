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

char stack::pop(){
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
    //push inputs into stack
    while(char& c : input){
        std::string numstr = '';
        //in case num has multiple digits
        if (std::isdigit(c)){
            numstr.append(c);
        }
        else{
            nums.push(numstr);
            //end of number, push to numstack
            numstr = '';
            if (c == ' '){
                //pass
            }
            else{
                ops.push(c);
            }
        }
    }

    //calculating via switch case
    switch(op){
        case '+':
            return add(num1 + num2);

        case '-':
            return (num1 - num2);
        
        case '*':
            return (num1*num2);
        
        case '/':
            return (num1/num2);

        case 'x':
            exit = true;
            return (0);

        default:
            cout << "Invalid operation" << endl;
            return (0);
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

