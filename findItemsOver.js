function findItemsOver(itemList, threshold){
    var itemOver= [];
      var threshold= 20;
    for(var i=0; i<itemList.length; i++){
     var item=itemList[i];
      if(item.qty>threshold){
        itemOver.push(item);
      } 
      }
      return itemOver;
    }
    export default findItemsOver;