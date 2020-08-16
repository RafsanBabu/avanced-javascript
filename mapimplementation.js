const students = [
    {id:2, name:"Rahim"},
    {id:3, name: "karim"},
    {id:4, name:"babu"},
];

const studentsName = students.map(nameFinder);

function nameFinder(studentss){
    return studentss.name;
}
console.log(studentsName);

