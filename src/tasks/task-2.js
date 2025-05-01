import path from 'node:path';
import fs from 'node:fs/promises';

const createInitialFiles = async () => {
  const pathToTextsFolder = path.join(process.cwd(), 'src', 'texts');

  const createFolderData = await fs.mkdir(pathToTextsFolder, {
    recursive: true,
  });

  let randomNum = Math.floor(Math.random() * 10);

  for (let i = 0; i <= randomNum; i++) {
    const pathToTxtFile = path.join(pathToTextsFolder, `textFile-${i}.txt`);

    const createFile = await fs.writeFile(pathToTxtFile, `${i}`);
  }
};

// createInitialFiles();

const mergeTextFiles = async () => {
  const pathToTextDir = path.join(process.cwd(), 'src', 'texts');
  const pathToMergedFile = path.join(pathToTextDir, 'merged.txt');
  const createMergedFile = await fs.writeFile(pathToMergedFile, 'Merged file:');
  const dirDataArr = await fs.readdir(pathToTextDir);

  dirDataArr.forEach(async (el) => {
    if (el !== 'merged.txt') {
      const readContent = await fs.readFile(
        path.join(pathToTextDir, el),
        'utf-8',
      );

      const AddToMerged = await fs.appendFile(
        pathToMergedFile,
        `\n${readContent}`,
      );
    }
  });
};

mergeTextFiles();
