import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedPath = getFixturePath('expected.txt');

test('genDiff json', () => {
  const expected = readFileSync(expectedPath, 'utf-8');

  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  console.log(genDiff(file1, file2));
  console.log(expected);
  expect(genDiff(file1, file2)).toEqual(expected);
});

test('genDiff yaml', () => {
  const expected = readFileSync(expectedPath, 'utf-8');

  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');

  console.log(genDiff(file1, file2));
  console.log(expected);
  expect(genDiff(file1, file2)).toEqual(expected);
});
