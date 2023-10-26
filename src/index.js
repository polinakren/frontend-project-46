import fs from 'fs';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const data1 = fs.readFileSync(filepath1, 'utf-8');
  const data2 = fs.readFileSync(filepath2, 'utf-8');

  const obj1 = JSON.parse(data1);
  const obj2 = JSON.parse(data2);

  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const diff = sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return ` + ${key}: ${obj2[key]}`;
    }
    if (!_.has(obj2, key)) {
      return ` - ${key}: ${obj1[key]}`;
    }
    if (obj1[key] === obj2[key]) {
      return ` ${key}: ${obj1[key]}`;
    }
    return ` - ${key}: ${obj1[key]}\n + {key}: ${obj2[key]}`;
  });

  return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;
