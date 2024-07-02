import { log } from "console";
import fs from "fs/promises";
import fsn from "fs";
import path from "path";

console.log(fs);

let basepath = "C:\\Users\\vedan\\Documents\\GitHub\\WebDev\\Exercise 15";

let files = await fs.readdir(basepath);

for (const item of files) {
    let ext = item.split(".");
    ext = ext[ext.length-1]
    if(fsn.existsSync(path.join(basepath, ext))){
        fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
    }
    else{
        fs.mkdir(ext);
    }
    // console.log(ext);
}