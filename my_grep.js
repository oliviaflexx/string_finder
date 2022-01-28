const fs = require("fs");
const readline = require("readline");

const searchString = process.argv[2];
const path = process.argv[3];

async function processLineByLine(file) {
  const fileStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let counter = 1;
  for await (const line of rl) {
    const found = line.includes(searchString);
    let print = file + ":";

    if (found) {
      print = print + counter + ":" + line;
      console.log(print);
    }
    counter++;
  }
}

const readDirectory = (path) => {
  fs.readdir(path, (err, files) => {
    try {
      files.forEach((file) => {
        readDirectory(path + "/" + file);
      });
    } catch {
      processLineByLine(path);
    }
  });
};

readDirectory(path);
