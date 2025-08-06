// EXERCISE 19: Convert C code to JavaScript - switch statement for grades
// Use appropriate JavaScript features to match the logic and output

/*
C Code:
#include <stdio.h>

int main() {
    char grade = 'B';
    switch(grade) {
        case 'A': printf("Excellent"); break;
        case 'B': printf("Good"); break;
        case 'C': printf("Fair"); break;
        default: printf("Fail");
    }
    return 0;
}
*/

// Your JavaScript code here:
let grade = "B";
switch(grade){
    case "A":
        console.log("excellent");
        break;
        case "B" :
            console.log("good");
            break;
            case "C":
                console.log("fair");
                default :
                console.log("Fail");
}