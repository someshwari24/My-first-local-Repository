//write a javascript program to create an object and print it s properties
//write a jaavascript program to add,update and delete properties of an object


const student={
    name:"someshwari",
    rollno:"23b81a05mu",
    age:20

}
console.log("properties of student object:\n");
for(let key in student)
{
  console.log(key+":"+student[key]);
}

console.log("Adding properties to student object:\n");
student["class"]="btech 3rd year";
student["section"]="cse j";
console.log("adding class property:"+student.class);
console.log("adding section property:"+student.section);

console.log("Updating properties of student object:\n");
student["class"]="btech 3-2 sem";
console.log("updating class property:"+student.class);
console.log("Deleting properties of student object:\n");
console.log("deleting age property:"+delete student.age);

console.log("properties of student object:");
for(let key in student)
{
  console.log(key+":"+student[key]);
}