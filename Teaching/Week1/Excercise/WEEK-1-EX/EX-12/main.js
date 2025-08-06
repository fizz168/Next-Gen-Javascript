// EXERCISE 12: Write a for...in loop to iterate over the student object you created above

// Your code here:
let student = {
    name : "nigga",
    age : "18",
    major :"cineplex",
};
for(let key in student){
    console.log(key + ":" + student[key]);
}