function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++) {
    if (isExist(collection_a[i].key,object_b.value)) {
      collection_a[i].count-=(Math.floor(collection_a[i].count/3));
    }
  }
  return collection_a;
}

function isExist(element,array){
for (var i = 0; i < array.length; i++) {
  if(element === array[i]){
    return true;
  }
}
return false;
}
