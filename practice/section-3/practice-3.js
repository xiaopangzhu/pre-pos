function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);
  for (var i = 0; i < collection_c.length; i++) {
    if (isExist1(collection_c[i].key,object_b.value)) {
      collection_c[i].count -= (Math.floor(collection_c[i].count/3));
    }
  }
  return collection_c;
}

function isExist1(element,array){
for (var i = 0; i < array.length; i++) {
  if(element === array[i]){
    return true;
  }
}
return false;
}

function count_same_elements(collection) {
  var collection_c = [];
  for (var i = 0; i < collection.length; i++) {
    if (isExist(collection[i],collection_c) !== -1) {
      collection_c[isExist(collection[i],collection_c)].count++;
    }
    else {
      collection_c.push(createObject(collection[i],1));
    }
  }
  return collection_c;
}

function isExist(element,collection_c){
  for (var i = 0; i < collection_c.length; i++) {
    if(element === collection_c[i].key){
      return i;
    }
  }
  return -1;
}

function createObject(key,count){
  return {"key":key,"count":count};
}
