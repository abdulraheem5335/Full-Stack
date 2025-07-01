fs.writeFile("second.txt", "Write File Asynchronously2!", () => {
    console.log("Done");

    fs.readFile("second.txt", (error, data) => {
        console.log(error, data.toString());
        // again
        fs.writeFile("second.txt", "Write File Asynchronously2!", () => {
            console.log("Done");

            fs.readFile("second.txt", (error, data) => {
                console.log(error, data.toString());
        // again
            })
        })
    })
})