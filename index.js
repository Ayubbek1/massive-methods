//        1
let nums = [1,2,3,4,5,6,7,8,9,10]
let even = nums.filter((nums) => nums%2 ===0)
let odd = nums.filter((nums) => nums%2 !==0)
console.log(
    `even = ${even}`, "\n" ,
    `odd = ${odd}`
)
//        2
let students = ["ayub","islom","daler","iskandar","shaxzod"]
let students_length = students.map((students) => students.length)
let students_length_index = students_length.indexOf(Math.max.apply(null,students_length))
let ln = students.slice(students_length_index,students_length_index+1)
console.log(ln)
//        3
let kick = students.splice(prompt(students)-1 ,1)
console.log(students)
//        4
let cars = [20000, 16000 , 40000, 30000,35000,60000,13000,15000,45000,110000]
let from = +prompt("from")
let up = +prompt("up")
let filtered = cars.filter((cars)=>from <= cars && cars <= up)
console.log(filtered)

