class GeneratorLogic {
  
  constructor(hexes, numbers, ports) {
    this.hexes = hexes
    this.numbers = numbers
    this.ports = ports
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  allocateHexes() {
    let newHexes = this.shuffle(this.hexes)
    console.log(newHexes)
    return newHexes
  }

}

export default GeneratorLogic
