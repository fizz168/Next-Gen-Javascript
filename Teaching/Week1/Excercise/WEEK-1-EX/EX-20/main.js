// EXERCISE 20: Convert C code to JavaScript - struct array iteration
// Use appropriate JavaScript features to match the logic and output

/*
C Code:
#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student students[3] = {
        {"Alice", 20},
        {"Bob", 22},
        {"Charlie", 21}
    };

    for (int i = 0; i < 3; i++) {
        printf("%s\n", students[i].name);
    }

    return 0;
}
*/

// Your JavaScript code here:
// const student1 = {
//     name : "alice",
//     age : 20,
// };
// const student2 = {
//     name : "bob",
//     age : 22,
// };
// const student3 = {
//     name : "charlie",
//     age : 21,
// };
// const students = [student1, student2, student3];
// for(const s of students){
//     console.log("student");
//     for(const key in s){
//         console.log(`${key} : ${s[key]}`);
//     }
//     console.log("-------");
//     } //idk what im doing hahah
const student =[
    {name : "Alice", age : 20},
    {name : "Bob", age : 22},
    {name : "charlie", age : 21},
];
for (const s of student){
    console.log(s.name);
}



