//demonstrate following concepts by using c++ 
//for, while, continue, if, else, switch
#include <iostream>
using namespace std;

int main() {
    // for loop
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;

    // while loop
    int j = 1;
    while (j <= 5) {
        cout << j << " ";
        j++;
    }
    cout << endl;

    // continue statement
    for (int k = 1; k <= 5; k++) {
        if (k == 3) {
            continue; // Skip printing '3'
        }
        cout << k << " ";
    }
    cout << endl;

    // if-else statement
    int num = 7;
    if (num % 2 == 0) {
        cout << num << " is even." << endl;
    } else {
        cout << num << " is odd." << endl;
    }

    // switch statement
    char grade = 'B';
    switch (grade) {
        case 'A':
            cout << "Excellent!" << endl;
            break;
        case 'B':
            cout << "Good job!" << endl;
            break;
        case 'C':
            cout << "You passed." << endl;
            break;
        default:
            cout << "Try again." << endl;
    }

    return 0;
}

