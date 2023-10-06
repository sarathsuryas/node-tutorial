const _=require('lodash');

const array=[1,[2,[3,[4,[5,[6]]]]]]

const array2=_.flattenDeep(array)
console.log(array2);