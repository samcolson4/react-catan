class GeneratorLogic {
  
  constructor(hexes, numbers, ports) {
    this.hexes = hexes
    this.numbers = numbers
    this.ports = ports
    this.boardHexes = []
    this.boardNumbers = []
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // makeMap() {
  //   this.allocateHexes
  //   this.allocateNumbers
  // }

  allocateHexes() {
    this.boardHexes = this.hexes
    this.shuffle(this.boardHexes)
    return this.boardHexes
  }

  allocateNumbers() {
    this.boardNumbers = this.numbers
    this.shuffle(this.boardNumbers)

    var robberIndex = this.boardHexes.indexOf("desert")
    this.boardNumbers.splice(robberIndex, 0, "Robber")
  
    return this.boardNumbers
  }

}

export default GeneratorLogic
