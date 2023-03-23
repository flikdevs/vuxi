const fs = require("fs");
const path = require("path");
const folder = require("../utils/folder");

module.exports = async (type, name) => {
  const dir = process.cwd();
  const srcDir = path.join(dir, "src");

  const lang = fs.existsSync(path.join(dir, "tsconfig.json")) ? "ts" : "js";

  const { folderDir, content, fileType } = folder(type, srcDir, { name, lang });

  const filePath = path.join(folderDir, `${name}.${fileType}`);

  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, content, (err) => {
      if (!err) {
        console.log("Success");
      } else {
        console.log(err);
      }
    });
  } else {
    console.log("File already exist!");
  }
};
