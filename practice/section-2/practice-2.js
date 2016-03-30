function count_same_elements(collection) {
  var resultArray = [];
  var str = /-/;
  for (var i = 0; i < collection.length; i++) {
    if (!str.test(collection[i])) {
      if (isExist(collection[i],resultArray) !== -1) {
        resultArray[isExist(collection[i],resultArray)].count++;
      }
      else {
        resultArray.push(createObject(collection[i],1));
      }
    }
    else {
      resultArray.push(createObject(collection[i].substring(0,1),parseInt(collection[i].substring(2))));
    }
  }
  return resultArray;
}

function isExist(element,array){
  for (var i = 0; i < array.length; i++) {
    if(element === array[i].key){
      return i;
    }
  }
  return -1;
}

function createObject(key,count){
  return {"key":key,"count":count};
}
