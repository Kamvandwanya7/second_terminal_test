function totalPhoneBill(data){
    let totalBill= 0;
    var dataType= data.split(",");
for(var i=0; i<dataType.length; i++){
    let bill= dataType[i].trim(i);
    if (bill==="call"){
      totalBill+=2.75;
    }else if( bill==="sms"){
      totalBill+=0.65;
    }
  }
    return "R"+totalBill.toFixed(2);
  }
  export default totalPhoneBill;