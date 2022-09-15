const studentsArray = [
    { name: 'Dinanath', year: 2019, ranking: 7 },
    { name: 'Suraj', year: 2019, ranking: 4 },
    { name: 'Amit', year: 2019, ranking: 5 },
    { name: 'Akash', year: 2018, ranking: 4 },
    { name: 'Sagar', year: 2017, ranking: 3 },
]


let newarr = [];
let students = studentsArray.filter(item => (item.year == 2019) && (item.ranking > 4));

for (let i = 0; i < students.length; i++) {
    newarr.push(students[i].name);
}

alert(newarr.sort());




