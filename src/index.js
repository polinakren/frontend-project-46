import fs from 'fs';
import path from 'path';
import process from 'process';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import format from './formatters/index.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);
const getFileFormat = (filePath) => path.extname(filePath).slice(1);

const readData = (file) => fs.readFileSync(file, 'utf-8');

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const absolutePath1 = getAbsolutePath(filepath1);
  const absolutePath2 = getAbsolutePath(filepath2);

  const data1 = readData(absolutePath1, 'utf-8');
  const data2 = readData(absolutePath2, 'utf-8');

  const fileFormat1 = getFileFormat(filepath1);
  const fileFormat2 = getFileFormat(filepath2);

  const data1Parse = parse(data1, fileFormat1);
  const data2Parse = parse(data2, fileFormat2);

  const difference = buildTree(data1Parse, data2Parse);
  return format(difference, formatName);
};

export default genDiff;
