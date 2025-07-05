use("nerdDB")

// console.log(db)


// db.courses.insertMany([
    
//   {
//     name: "Web Development",
//     price: 0,
//     assignments: 12,
//     projects: 45
//   },
//   {
//     name: "Data Science",
//     price: 100,
//     assignments: 20,
//     projects: 10
//   },
//   {
//     name: "Machine Learning",
//     price: 150,
//     assignments: 15,
//     projects: 8
//   },
//   {
//     name: "Cloud Computing",
//     price: 200,
//     assignments: 10,
//     projects: 12
//   },
//   {
//     name: "Cyber Security",
//     price: 180,
//     assignments: 18,
//     projects: 14
//   },
//   {
//     name: "Mobile App Development",
//     price: 120,
//     assignments: 16,
//     projects: 20
//   },
//   {
//     name: "Game Development",
//     price: 130,
//     assignments: 14,
//     projects: 18
//   },
//   {
//     name: "Artificial Intelligence",
//     price: 250,
//     assignments: 22,
//     projects: 9
//   }
// ])

// let a =  db.courses.find({price: 0})
// let a =  db.courses.findOne({price: 0})
// console.log(a)



// UPDATE and DELETE
// db.courses.updateOne({price: 0 }, {$set:{price: 100}} )
// db.courses.updateMany({price: 0 }, {$set:{price: 1000}} )

db.courses.deleteOne({price:100})
db.courses.deleteMany({price:100}, {price:150})