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
#include <cstdarg>
//C++ std arg lib for variadic functions (newer C++ versions can use template)

//Defining a stack to help with order of operations
class stack{
    int top = -1;
    int max = 20

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


double calc(bool exit){
    using namespace std;
    char op;
    double num1, num2;
    
    string getOp = "Enter an operation ('+', '-', '*', '/', 'x' to exit): ";
    //exit the moment 'x' is entered
    string getNum = "Enter 2 operands: ";

    cout << getOp << endl;
    cin >> op;

    cout << getNum << endl;
    cin >> num1 >> num2;

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

int main(){
    bool exit = false;
    double result;
    do{
        
    }
}

int main(){
    bool exit = false;
    double result;
    do{
        result = calc(exit);
        if (result == 0){
            if (!exit){
                std::cout << result << std::endl;
            }
        }
        else{
            std::cout << result << std::endl;
        }
    }
    while(!exit);
}


