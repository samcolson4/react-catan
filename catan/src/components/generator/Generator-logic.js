class GeneratorLogic {
  
  constructor(hexes, numbers, ports) {
    this.hexes = hexes
    this.numbers = numbers
    this.ports = ports
    this.boardHexes = []
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  allocateHexes() {
    this.boardHexes = this.hexes
    this.shuffle(this.boardHexes)
    return this.boardHexes
  }

  allocateNumbers() {
    
  }

}

export default GeneratorLogic
