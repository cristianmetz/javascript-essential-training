class Bedroom {
  constructor(
    name,
    size,
    color,
    window,
    numPictures,
    numPicturesHung,
    pillows,
    mattresses,
    madeBed
  ) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.window = window;
    this.pictures = {
      totalNum: numPictures,
      picsHung: numPicturesHung,
    };
    this.bed = {
      numPillows: pillows,
      numMattresses: mattresses,
    };
    this.madeBed = madeBed;
  }
  toggleMadeBed(bedStatus) {
    this.madeBed = bedStatus;
  }
  bedItems(pillowNum, mattressNum) {
    this.bed.numPillows = pillowNum;
    this.bed.numMattresses = mattressNum;
  }
  togglePictureNum(standingPictures, hungPictures) {
    this.pictures.totalNum = standingPictures;
    this.pictures.picsHung = hungPictures;
  }
}

export default Bedroom;
