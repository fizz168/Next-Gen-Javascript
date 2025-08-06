// Demo EX-4: C to JavaScript Conversion - Structs to Objects
// Original C Code:
/*
#include <stdio.h>

struct Student {
    char name[20];
    int age;
};

int main() {
    struct Student s1 = {"Visal", 18};
    printf("Name: %s\n", s1.name);
    printf("Age: %d\n", s1.age);
    return 0;
}
*/

// JavaScript Implementation:
// let student = {
//   name: "Visal",
//   age: 18,
// };

// console.log("Name:", student.name);
// console.log("Age:", student.age);

// // Display output in the page
// let output = `Name: ${student.name}\nAge: ${student.age}`
// console.log(output);
let student = {
  name : "visal",
  age : 18,
};
console.log("name :",student.name);
console.log("age :", student.age);

