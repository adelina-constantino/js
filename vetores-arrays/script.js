// let array = ['String', 1, true];
// console.log(array);

// let array = ['String', 1, true, ['array1'],
//     ['array2'],
//     ['array3'],
//     ['array4']
// ];
// //console.log(array[0]);

// //forEach
// //array.forEach(function(item, index) { console.log(item, index) });

// //push
// array.push('novo item');
// console.log(array);

// //pop()
// array.pop();
// console.log(array);

// //shift()
// array.shift();
// console.log(array);

// //unshift()
// array.unshift('novo item no inicio');
// console.log(array);

// //indexOf
// console.log(array.indexOf(true));

// //splice()
// array.splice(0, 3);
// console.log(array);

// //slice()
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

let object = { String: 'Eu', number: 1, Boolean: true, array: ['Pão'], objectInterno: { objectInterno: 'objeto interno' } };

console.log(object);
console.log(object.objectInterno);

var string = object.String;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { String, Boolean, objectInterno } = object;
console.log(string, Boolean, objectInterno);