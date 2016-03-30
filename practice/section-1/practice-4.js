function collect_same_elements(collection_a, object_b) {
  var resultArray=[];
  for (var i = 0; i < collection_a.length; i++) {
    if(isExist(collection_a[i].key,object_b.value)){
        resultArray.push(collection_a[i].key);
    }
  }
  return resultArray;
}

function isExist(element,collection_b){
  for (var i = 0; i < collection_b.length; i++) {
    if (element === collection_b[i]) {
       return true;
    }
  }
  return false;
}
