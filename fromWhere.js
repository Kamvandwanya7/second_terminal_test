function fromWhere(registration){
    switch (registration){
      case "CY":
      return "Bellvile";
      case "CJ":
        return "Paarl";
      case "CA":
        return "Cape Town";
      case "CC":
        return "Some other place!";
     }
  }
  export default fromWhere;