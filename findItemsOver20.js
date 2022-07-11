function findItemsOver20(itemList){
    var over20 = [];
    for(var i=0; i<itemList.length; i++){
      var items= itemList[i];
      if(items.qty>20){
        over20.push(items);
    }
  }
      return over20;
  }
  export default findItemsOver20;