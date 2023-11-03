import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plain = (tree) => {
  const iter = (node, depth) => {
    const buildString = node.map((diff) => {
      switch (diff.type) {
        case 'nested':
          return iter(diff.children, `${depth}${diff.key}.`);
        case 'added':
          return `Property '${depth + diff.key}' was added with value: ${stringify(diff.value)}\n`;
        case 'deleted':
          return `Property '${depth + diff.key}' was removed\n`;
        case 'changed':
          return `Property '${depth + diff.key}' was updated. From ${stringify(diff.value1)} to ${stringify(diff.value2)}\n`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`Unknown type: ${diff.type}`);
      }
    });
    return `${buildString.join('')}`;
  };
  return iter(tree, '').trim();
};

export default plain;
