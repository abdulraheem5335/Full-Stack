import fs from "fs/promises"

// let a = await fs.readFile("second.txt");


let b = await fs.writeFile("third.txt", "\n\n\nWriting to first.txt using promise")


// console.log(a.toString())
