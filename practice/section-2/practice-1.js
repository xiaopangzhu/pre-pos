function count_same_elements(collection) {
  var resultArray = [];
  for (var i = 0; i < collection.length; i++) {
    if (isExist(collection[i],resultArray) !== -1) {
      resultArray[isExist(collection[i],resultArray)].count++;
    }
    else {
      resultArray.push(createObject(collection[i],1));
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
