function sumObjects(...objects){
    // console.log(objects)
    let result = {}
    objects.forEach(obj => {
        Object.keys(obj).forEach(key => {
          result[key] = (result[key] || 0) + obj[key];
        });
    });

    return result
}

const first = {a: 2, b: 4};
const second = {a: 2, b: 10};
const third = {d: -5};

console.log(sumObjects(first)); // {a: 2, b: 4}
console.log(sumObjects(first, third)); // {a: 2, b: 4, d: -5}
console.log(sumObjects(first, second, third)); // {a: 4, b: 14, d: -5}