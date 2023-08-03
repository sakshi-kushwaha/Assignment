//Demonstrate the following concepts using C++
//Closure
#include <iostream>
using namespace std;

int main() {
    int x = 5;

    // Lambda function (closure) capturing the variable 'x' from the surrounding scope
    auto closure = [x](int y) {
        return x + y;
    };

    int y = 10;
    cout << "Result: " << closure(y) << endl;

    return 0;
}
