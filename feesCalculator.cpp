//A one stop shop to calculate the total cost of buying a stock on tiger trade.
/*
Goals:
1. User to input stock price and desired number of stocks
2. Calculator will determine the total value being traded
3. Calculates total fees levied on the trade
4. Outputs the true cost of the trade and the true price per share
*/

#include <iostream>

double stockSG(double value){
    /*
    These are rates for SG stocks
    types:
    commission: c
    platform: p
    trading: t
    clearing: x
    returns the true cost of buying an SG stock (including the fees levied)
    */
    //Values stored are nominal values (just multiply to get the net charges)
    double const commission = 0.0003;
    double const platform = 0.0003;
    double const trading = 0.000075;
    double const clearing = 0.000325;
    double const gst = 0.09;

    double fees = 0;
    if (commission*value < 0.99){
        //Minimum commission fee of $0.99
        fees += 0.99;
    }
    else{
        fees += commission*value;
    }

    if (platform*value < 1){
        //Minimum platform fee of $1
        fees += 1;
    }
    else{
        fees += platform*value;
    }

    fees = value*clearing + value*trading;
    fees *= gst;
    return (fees + value)
}

double stockUS(double value){
    /*
    These are rates for US stocks
    Returns true cost of buying a US stock (including fees levied)
    */
}

double* calc(double price, double quantity, std::string place){
    /*
    Price refers to the target price of the stock
    Quantity refers to the number of shares being traded
    Place refers to where the stock is listed (NYSE, SGX)
    */
    using namespace std;

    double value = price*quantity;

    double trueCost;
    switch(place){
        case 'SGX':
            trueCost = stockSG(value);

        case 'NYSE':
            trueCost = stockUS(value);

        default:
            trueCost = value;
    }

    double results[2] = {value, trueCost};

    return results;

    cout << "Share value: " << value <<endl;
    cout << "Total cost: " << trueCost << endl;
    cout << "Cost per share: " << trueCost/quantity << endl;
}


int main(){
    using namespace std;

    double price;
    double quantity;
    string place;

    cout << "Share price: ";
    cin >> price;
    
    cout << endl << "Number of shares: ";
    cin >> quantity;

    cout << endl << "Stock exchange: ";
    cin >> place;

    double results[2] = calc(price, quantity, place);

    double value = results[0];
    double trueCost = results[1];

    cout << "Share value: " << value <<endl;
    cout << "Total cost: " << trueCost << endl;
    cout << "Cost per share: " << trueCost/quantity << endl;

}
