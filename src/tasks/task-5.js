import path from 'node:path';
import fs from 'node:fs/promises';

const normalizePath = (userPath) => {
  const normalizedPath = path.normalize(userPath);
  const pathData = path.parse(normalizedPath);

  console.log(`Normalized path: ${normalizedPath}`);
  console.log(`Base: ${pathData.base}`);
  console.log(`Extension: ${pathData.ext}`);
  console.log(`Directory path: ${pathData.dir}`);
};

normalizePath('./src/../src/logs///log.txt');
