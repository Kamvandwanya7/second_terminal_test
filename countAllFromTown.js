function countAllFromTown(regNo, reg){
    let counter=0;
     var rgNumbers= regNo.split(",");
    for(var i=0; i < rgNumbers.length; i++){
      if(rgNumbers[i].includes(reg)){
         counter++;
     }
     }
    return counter;
  }
  export default countAllFromTown;