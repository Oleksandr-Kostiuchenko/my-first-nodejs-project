import path from 'node:path';
import fs from 'node:fs/promises';
import { access, constants } from 'node:fs';

const startAppLog = async () => {
  const pathToSrc = path.join(process.cwd(), 'src');
  const pathToLogsFolder = path.join(process.cwd(), 'src', 'logs');
  const pathToDataFile = path.join(process.cwd(), 'src', 'logs', 'log.txt');

  fs.access('src/logs', constants.F_OK)
    .then(async () => {
      const createDataFile = await fs.writeFile(
        pathToDataFile,
        `App started: ${new Date().toISOString()}`,
      );
    })
    .catch(async () => {
      const createFolderData = await fs.mkdir(pathToLogsFolder);

      const createDataFile = await fs.writeFile(
        pathToDataFile,
        `App started: ${new Date().toISOString()}`,
      );
    });
};

// startAppLog();
