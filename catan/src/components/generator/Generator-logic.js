class GeneratorLogic {
  
  constructor(hexes, numbers, ports) {
    this.hexes = hexes
    this.numbers = numbers
    this.ports = ports
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  allocateHexes() {
    let newHexes = this.shuffle(this.hexes)
    console.log(newHexes)
    return newHexes
  }

}

export default GeneratorLogic