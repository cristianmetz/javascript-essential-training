/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Toolkit {
    constructor (
        name,
        color,
        weight,
        phillipsScrewdriver,
        flatheadScrewdriver,
        headAttchments,
        zipped,
    ){
    
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.phillipsScrewdriver = phillipsScrewdriver;
    this.flatheadScrewdriver = flatheadScrewdriver;
    this.headAttchments = headAttchments;
    this.zipped = zipped;
    }

    toggleZipper(zipperStatus) {
      this.zipped = zipperStatus;
    }
}
export default Toolkit;