// EXERCISE 15: Create multiple student objects and store them in an array called students. Use a combination of for...of and for...in to print each student's details

// Your code here:
// Your code here:
const student1 = {
    name : "o",
    age : 18,
    major : "cs",
};
const student2 = {
    name : "n",
    age : 19,
    major : "cs",
};
const students = [student1, student2];
for(const s of students){
    console.log("student");
    for(const key in s){
        console.log(`${key} : ${s[key]}`);
    }
    console.log("********")
}