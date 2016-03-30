function collect_same_elements(collection_a, collection_b) {
  var resultArray=[];
  for (var i = 0; i < collection_a.length; i++) {
    if(isExist(collection_a[i],collection_b[0])){
        resultArray.push(collection_a[i]);
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
