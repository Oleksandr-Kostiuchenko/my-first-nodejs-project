//! ============================================= Practice with path module =============================================
import path from 'node:path';
// const path = require('node:path');

//* Join !
const pathToWorkDir = path.join(process.cwd());
const pathToFile = path.join('src', 'index.js');
const globalPath = path.join(pathToWorkDir, pathToFile);

//* Parse !
const globalPathData = path.parse(globalPath);

//* Dirname
const directoriesName = path.dirname(globalPath);

//* Extension name
const extName = path.extname(pathToFile);

//* Normalize
const randomPath = `${globalPath}\\..\\`;
const normalizedPath = path.normalize(randomPath);

//* Resolve
const resolvedPath = path.resolve('src', './index.js/');

//* Separate
const seperatedArr = 'my-first-nodejs-project\\src\\index.js'.split(path.sep);

//! ============================================= /Practice with path module =============================================

//! ============================================= Practice with FS module =============================================
import fs from 'node:fs/promises';
// const fs = require('node:fs/promises');

//* Write
const writeFunction = async (dataStr, fileName) => {
  try {
    const data = await fs.writeFile(`${fileName}`, dataStr, 'utf-8');

    console.log('Done!');
  } catch (error) {
    console.log(error);
  }
};

// const pathToFileDir = path.join(process.cwd(), 'src', 'files', 'random.txt');
// writeFunction('Hello Node JS!', pathToFileDir);

//* Read
const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath);

    console.log(`File content: ${data}`);
  } catch (error) {
    console.log(error);
  }
};

// const pathToTextFile = path.join(process.cwd(), 'src', 'files', 'random.txt');
// readFile(pathToTextFile);

//* Append
const appendFile = async (filePath, content) => {
  try {
    const data = await fs.appendFile(filePath, content);

    console.log('Done');
  } catch (error) {
    console.log(error);
  }
};

// const pathToTextFile = path.join(process.cwd(), 'src', 'files', 'random.txt');
// appendFile(pathToTextFile, `\nNode JS is a great tool!`);

//* Rename
const renameFile = async (oldPath, newPath) => {
  try {
    const data = await fs.rename(oldPath, newPath);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// const oldPathToTxtFile = path.join(process.cwd(), 'src', 'files', 'random.txt');
// const newPathToTxtFile = path.join(
//   process.cwd(),
//   'src',
//   'files',
//   'textContent.txt',
// );
// renameFile(oldPathToTxtFile, newPathToTxtFile);

//* Delete
const deleteFile = async (filePath) => {
  try {
    const data = await fs.unlink(filePath);

    console.log('Done!');
  } catch (error) {
    console.log(error);
  }
};

// const pathToTxtFile = path.join(process.cwd(), 'src', 'files', 'random.txt');
// deleteFile(pathToTxtFile);

//* Read dir
const readDir = async (path) => {
  try {
    const data = await fs.readdir(path);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// const pathToFolder = path.join(process.cwd(), 'src');
// readDir(pathToFolder);
// readDir(`${pathToFolder}/files`);

//* Access
const checkAccess = async (path) => {
  try {
    const data = await fs.access(path);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// const pathToTXTfilik = path.join(
//   process.cwd(),
//   'src',
//   'files',
//   'textContent.txt',
// );
// checkAccess(pathToTXTfilik);
//! ============================================= /Practice with FS module =============================================
