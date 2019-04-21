let compareObj = (collection, source) => {
  let arr = [];
  const keys = Object.keys(source);
  let newArr = collection.filter(item => {
    return keys.every(prop => ((source[prop] === item[prop]) && (item.hasOwnProperty(prop))))
  });
  arr = newArr;  
  return arr;
}

console.log(compareObj([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))
// return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
