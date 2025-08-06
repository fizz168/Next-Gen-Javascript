// Demo EX-2: C to JavaScript Conversion - If/Else Statements
// Original C Code:
/*
#include <stdio.h>

int main() {
    int score = 75;

    if (score >= 90)
        printf("Grade A\n");
    else if (score >= 80)
        printf("Grade B\n");
    else
        printf("Grade C or below\n");

    return 0;
}
*/

// JavaScript Implementation:
let score = 75;
if (score >= 90){
    console.log("Grade A");
}else if (score >= 80){
    console.log("grade B");
}else{
    console.log("grade c or below");
}