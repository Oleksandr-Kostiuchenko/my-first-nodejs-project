import path from 'node:path';
import fs from 'node:fs/promises';
import { access, constants } from 'node:fs/promises';

const checkDeleteFile = async (file, dir) => {
  const pathToFile = path.join(process.cwd(), 'src', `${dir}`, `${file}`);

  fs.access(pathToFile, constants.F_OK)
    .then(async () => {
      console.log(`${file} exists and will be successfully deleted!`);
      const deleteData = await fs.unlink(pathToFile);
    })
    .catch(() => {
      console.log(`${file} DOES NOT exist!`);
    });
};

checkDeleteFile('NEW_NEW______W_NEW_OLD_docsFile-0.tx', 'docs');
