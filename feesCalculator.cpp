//To calculate the total cost of buying a stock on tiger trade

#include <iostream>

double stocks(char type){
    /*
    types:
    commission: c
    platform: p
    trading: t
    clearing: x
    */
    //Values stored are nominal values (just multiply to get the net charges)
    double commission = 0.0003;
    double platform = 0.0003;
    double trading = 0.000075;
    double clearing = 0.000325;
    switch(type){
        case 'c':
            return commission;
        
        case 'p':
            return platform;
        
        case 't':
            return trading;
        
        case 'x':
            return clearing;

        default:
            return (-1.0);
    }
}

