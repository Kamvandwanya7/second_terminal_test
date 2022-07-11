function mostProfitableDepartment(salesData){
    const dataMap={};
    for(var i=0; i<salesData.length; i++){
      const saleData= salesData[i];
    dataMap[saleData.department]=0;
    }

  
   for(var i=0; i<salesData.length; i++){
      const saleData= salesData[i];
    var currentDepartmentTotal = dataMap[saleData.department];
     currentDepartmentTotal += saleData.sales;
      dataMap[saleData.department]= currentDepartmentTotal;
   }
 
  var maxSales= 0;
  var currentDepartment= 0;
  for(const dataDepartment in dataMap){
    const departmentSales= dataMap[dataDepartment]
    if (departmentSales> maxSales){
      maxSales= departmentSales;
      currentDepartment= dataDepartment;
    }
  }
    return currentDepartment;
  }
  export default mostProfitableDepartment;