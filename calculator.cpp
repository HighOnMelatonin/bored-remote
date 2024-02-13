//Calculator cuz i dont have one on arch
/*
I would like a GUI pls thx

*/

#include <iostream>

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

    //check num type to make sure numbers were inputted
    switch(op){
        case '+':
            return (num1 + num2);

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


