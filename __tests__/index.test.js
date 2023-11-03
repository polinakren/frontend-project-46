import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { test, expect, describe } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedPathStylish = getFixturePath('expected_stylish.txt');
const expectedPathPlain = getFixturePath('expected_plain.txt');
const expectedPathJson = getFixturePath('expected_json.txt');

const expectedStylish = readFileSync(expectedPathStylish, 'utf-8');
const expectedPlain = readFileSync(expectedPathPlain, 'utf-8');
const expectedJson = readFileSync(expectedPathJson, 'utf-8');

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');

const file1Yaml = getFixturePath('file1.yaml');
const file2Yaml = getFixturePath('file2.yaml');

describe('genDiff test', () => {
  test('yaml format', () => {
    expect(genDiff(file1Yaml, file2Yaml)).toEqual(expectedStylish);
    expect(genDiff(file1Yaml, file2Yaml, 'stylish')).toEqual(expectedStylish);
    expect(genDiff(file1Yaml, file2Yaml, 'plain')).toEqual(expectedPlain);
    expect(genDiff(file1Yaml, file2Yaml, 'json')).toEqual(expectedJson);
  });

  test('json format', () => {
    expect(genDiff(file1Json, file2Json)).toEqual(expectedStylish);
    expect(genDiff(file1Json, file2Json, 'stylish')).toEqual(expectedStylish);
    expect(genDiff(file1Json, file2Json, 'plain')).toEqual(expectedPlain);
    expect(genDiff(file1Json, file2Json, 'json')).toEqual(expectedJson);
  });
});
