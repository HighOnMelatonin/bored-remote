//Inventory Database Management System
/*
Database parameters:
Tables: location
Fields: Type of item, Name, item ID

Program functions:
1. view, add and remove items from database
2. Auto generate item id

Database directory: /resources/inventory.db
*/

#include <iostream>
#include <sqlite3.h>
#include <format>

int createDB(){
    sqlite3* DB;
    int exist = 0;
    exist = sqlite3_open("resources/inventory.db", &DB);
    //sqlite3_open returns int

    if (exist){
        std::cerr << "Error open DB" << sqlite3_errmsg(DB) << std::endl;
        //cerr means character error
        return (-1);
    }
    else{
        std::cout << "Opened Database Successfully!" << std::endl;
    }
    sqlite3_close(DB);
    return (0);
}

int createTable(std::string location){
    sqlite3* DB;
    std::string sql =std::format("CREATE TABLE {}}('Item ID' INT PRIMARY KEY NOT NULL,
    Name TEXT NOT NULL,
    Type TEXT NOT NULL);", location);
    int exit = 0;
    exit = sqlite3_open("resources/inventory.db", &DB);

    char* errorMessage;
    exit = sqlite3_exec(DB, sql.c_str(), NULL, 0, &errorMessage);

    if (exit != SQLITE_OK){
        std::cerr << "Error Create Table" << std::endl;
        sqlite3_free(errorMessage);
    }
    else{
        std::cout << "Table created Successfully" << std::endl;
    }
    sqlite3_close(DB);
    return (0);
}

