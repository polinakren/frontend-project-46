import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import process from 'process';
import parse from './parsers.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);
const getFileFormat = (filePath) => path.extname(filePath).slice(1);

const readData = (file) => fs.readFileSync(file, 'utf-8');

const getDifferences = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const diff = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return ` + ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return ` - ${key}: ${data1[key]}`;
    }
    if (data1[key] === data2[key]) {
      return `   ${key}: ${data1[key]}`;
    }
    return ` - ${key}: ${data1[key]}\n + ${key}: ${data2[key]}`;
  });

  return `{\n${diff.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2) => {
  const absolutePath1 = getAbsolutePath(filepath1);
  const absolutePath2 = getAbsolutePath(filepath2);

  const data1 = readData(absolutePath1, 'utf-8');
  const data2 = readData(absolutePath2, 'utf-8');

  const fileFormat1 = getFileFormat(filepath1);
  const fileFormat2 = getFileFormat(filepath2);

  const data1Parse = parse(data1, fileFormat1);
  const data2Parse = parse(data2, fileFormat2);

  return getDifferences(data1Parse, data2Parse);
};

export default genDiff;
