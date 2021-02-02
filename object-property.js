const students = [{
    id: 21,
    name: 'Omar Sunny'
  },
  {
    id: 31,
    name: 'Manaaaa'
  },
  {
    id: 41,
    name: 'Moyuri'
  },
  {
    id: 71,
    name: 'DeepJol'
  }
]

const names = students.map(studentsName => studentsName.name);
const ids = students.map(studentsId => studentsId.id);
const bigger = students.filter(studentsId => studentsId.id > 40);
const biggerFind = students.find(studentsId => studentsId.id > 40);
console.log(biggerFind);