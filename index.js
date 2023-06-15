//maps is also like an object but the difference is,in case of object keys can only be string but in case of map it can be anything.

var mapObj = new Map(); //creating a new map
console.log(mapObj);
//adding element in map

mapObj.set(1, 'aditya');
mapObj.set('name', 'sinha');
mapObj.set(true, 'sab theek hai');

//retreiving values from map

console.log(mapObj.get(1));

console.log(mapObj.set(4, 'adi'));
console.log(mapObj.set(4, 'adi'));
console.log(mapObj.size);

//NOTE: arrays,strings,map,set are all iterable but objects are not iterable
//we use Object.entries() to make it in form of array of array then iterate

var a = new Map([
  [1, 'aditya'],
  [2, 'sinha'],
]);
