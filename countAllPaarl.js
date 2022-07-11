function countAllPaarl(regNo){
    let counter = 0;
     var allPaarl = regNo.split(",");
     for (var i=0; i<allPaarl.length; i++){
       if(allPaarl[i].includes("CJ")){
       counter++;
   }
   }
    return counter;
   }
   export default countAllPaarl