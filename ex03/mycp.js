const fs = require("fs");
const path = require("path");
 
//1
 
const copyFile = () => {
    if (process.argv[2] === "-r") {} else {
        const read = fs.createReadStream(process.argv[2]);
        const write = fs.createWriteStream(process.argv[3]);
        read.pipe(write);
    }
}
copyFile()