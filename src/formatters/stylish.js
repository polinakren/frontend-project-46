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
  return `{\n${result.join('\n')}\n  ${getIndent(depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth = 1) => {
    switch (node.type) {
      case 'nested': {
        const arr = node.children.flatMap((child) => iter(child, depth + 1));
        return `${getIndent(depth)}  ${node.key}: {\n${arr.join('\n')}\n${getIndent(depth)}  }`;
      }
      case 'added':
        return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;

      case 'deleted':
        return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;

      case 'changed':
        return (`${getIndent(depth)}- ${node.key}: ${stringify(node.value1, depth)}\n${getIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`);
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  };
  const resultArray = data.flatMap((node) => iter(node, 1));
  return `{\n${resultArray.join('\n')}\n}`;
};

export default stylish;
