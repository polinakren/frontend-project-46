import _ from 'lodash';

const getIndent = (depth, splitSize = 4) => {
  const split = ' ';
  return split.repeat(depth * splitSize - 2);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return data;
  }
  const entries = Object.entries(data);
  const result = entries.map(([key, value]) => `${getIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${result.join('\n')}\n ${getIndent(depth)} }`;
};

const stylish = (data) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      switch (item.type) {
        case 'nested': {
          return `${getIndent(depth)}  ${item.key}: {\n${iter(item.children, depth + 1)}\n${getIndent(depth)}  }`;
        }
        case 'deleted':
          return `${getIndent(depth)}- ${item.key}: ${stringify(item.value, depth)}`;
        case 'added':
          return `${getIndent(depth)}+ ${item.key}: ${stringify(item.value, depth)}`;
        case 'changed':
          return (`${getIndent(depth)}- ${item.key}: ${stringify(item.value1, depth)}\n${getIndent(depth)}+ ${item.key}: ${stringify(item.value2, depth)}`);
        case 'unchanged':
          return `${getIndent(depth)}  ${item.key}: ${stringify(item.value, depth)}`;
        default:
          throw new Error(`Unknown type ${item.type}`);
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(data)}\n}`;
};

export default stylish;
