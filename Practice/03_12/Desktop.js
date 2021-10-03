// Creating class Desktop to be reused

class Desktop {
  //Defines parameters of the class
  constructor(name, color, weight, mainHD, altHD, liquidCooling) {
    //defining properties
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.hardDrives = {
      main: mainHD,
      alt: altHD,
    };
    this.liquidCooling = liquidCooling;
  }
  //adding a method
  toggleCooling(coolingStatus) {
    this.liquidCooling = coolingStatus;
  }

  //adding second method
  newHDspecs(mainHd, altHd) {
    this.hardDrives.main = mainHd;
    this.hardDrives.alt = altHd;
  }
}

export default Desktop;
