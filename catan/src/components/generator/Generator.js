class GeneratorLogic {
  
  constructor(hexes, numbers, ports) {
    this.hexes = hexes
    this.numbers = numbers
    this.ports = ports
  }

  // function shuffle(array) {
  //   array.sort(() => Math.random() - 0.5);
  // }

  // allocateHexes() {
  //   shuffle(this.hexes)
  // }


}

function Generator() {

  var hexes = ["wheat", "wheat", "wheat", "wheat", "ore", "ore", "ore", "brick", "brick", "brick", "sheep", "sheep", "sheep", "sheep", "lumber", "lumber", "lumber", "lumber", "desert"]

  let numbers = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]

  let ports = ["sheep", "lumber", "ore", "wheat", "three", "three", "three", "three"]

  let generator = new GeneratorLogic(hexes, numbers, ports)

  return (
    <div className="Generator">
      <p>Where the map will go</p>
    </div>
  )}

export default Generator;
