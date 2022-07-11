function isWeekDay(weekday){
    if (weekday.startsWith("S")){
      return false;
    }
    else {
      return true;
    }
  }
  export default isWeekDay