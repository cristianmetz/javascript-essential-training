// Class kitchen, to be reused

class Kitchen {
  //creating the class and defining it's parameters
  constructor(
    size,
    color,
    cabinets,
    drawers,
    knifes,
    forks,
    plates,
    dishWasher,
    lidOpen,
    cups,
    fryingPan
  ) {
    //define the class properties
    this.size = size;
    this.color = color;
    this.cabinets = cabinets;
    this.drawers = drawers;
    this.knifes = knifes;
    this.forks = forks;
    this.plates = plates;
    this.dishWasher = dishWasher;
    this.lidOpen = lidOpen;
    this.cups = cups;
    this.fryingPan = fryingPan;
  }

  togglelid(lidStatus) {
    this.lidOpen = lidStatus;
  }
}

export default Kitchen;
