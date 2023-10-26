#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);
    const diff = genDiff(absolutePath1, absolutePath2);
    console.log(diff);
  });

program.parse(process.argv);
