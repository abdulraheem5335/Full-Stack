const { error } = require('console');
const fs = require('fs');

// Show the function in the fs module
// console.log(fs)

console.log("starting")
// writeFileSync works synchronously
// fs.writeFileSync("first.txt", "Abdul Raheem is learning Web Development");


// writeFile is an Asynchronous
/*fs.writeFile("second.txt", "Write File Asynchronously2!", () => {
    console.log("Done");
    
    // Reading File  
    fs.readFile("second.txt", (error, data) => {
        // data.toString()
        // console.log(error, data);
        console.log(error, data.toString());
    })
})*/

fs.appendFile("second.txt", "Writing to an existing file!", (e, d) => {
    if( e )
        console.log("Error while appending:", e);
    else
        console.log("Successfully appended to second.txt")
})

console.log("Ending")
