import path from 'node:path';
import fs from 'node:fs/promises';

const createInitialFiles = async () => {
  const pathToDocsFolder = path.join(process.cwd(), 'src', 'docs');
  const createFolderData = await fs.mkdir(pathToDocsFolder);

  for (let i = 0; i <= 10; i++) {
    const pathToFile = path.join(pathToDocsFolder, `docsFile-${i}.txt`);

    const createRandomFile = fs.writeFile(
      pathToFile,
      'Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet',
    );
  }
};

// createInitialFiles();

const renameAllFiles = async (fileDir, prefix) => {
  const pathToFileDir = path.join(process.cwd(), 'src', fileDir);
  const dirData = await fs.readdir(pathToFileDir);

  dirData.forEach(async (el) => {
    const oldPathToFile = path.join(pathToFileDir, el);
    const newPathToFile = path.join(pathToFileDir, `${prefix}_${el}`);

    const renameFileData = await fs.rename(oldPathToFile, newPathToFile);
  });

  console.log(dirData);
};

// renameAllFiles('texts', 'NEW');
