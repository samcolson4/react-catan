import GeneratorLogic from '../Generator-logic.js'
import './imageGenerator.css'

import wheatImp from './hexes/wheat.png'
import brickImp from './hexes/brick.png'
import desertImp from './hexes/desert.png'
import lumberImp from './hexes/lumber.png'
import oreImp from './hexes/ore.png'
import sheepImp from './hexes/sheep.png'

import twoImp from './numbers/two.png'
import threeImp from './numbers/three.png'
import fourImp from './numbers/four.png'

function ImageGenerator() {

  let wheat = <img src={wheatImp} />
  let brick = <img src={brickImp} />
  let desert = <img src={desertImp} />
  let lumber = <img src={lumberImp} />
  let ore = <img src={oreImp} />
  let sheep = <img src={sheepImp} />

  let two = <img src={twoImp} />
  let three = <img src={threeImp} />
  let four = <img src={fourImp} />



  let hexes = [wheat, wheat, wheat, ore, ore, ore, brick, brick, brick, brick, sheep, sheep, sheep, sheep, lumber, lumber, lumber, lumber, desert]

  let numbers = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]
  
  let num_imgs = [5, two, 6, three, 8, 10, 9, 12, 11, four, 8, 10, 9, four, 5, 6, three, 11]

  let ports = ["sheep", "lumber", "ore", "wheat", "three", "three", "three", "three"]

  let generator = new GeneratorLogic(hexes, numbers, ports, desert, "robber")
  generator.makeMap()

  return (
    <div className="Generator-images">
      <p>Hit refresh to generate a new map.</p>
      <br></br>
      <br></br>
      <div id="board">
        <div class= "row" id="row_one">
            { generator.boardHexes[0] } 
            <span class="number_img">{ generator.boardNumbers[0] }</span>
            { generator.boardHexes[1] } 
            { generator.boardNumbers[1] }
            { generator.boardHexes[2] } 
            { generator.boardNumbers[2] }
        </div>
        
        <div class= "row" id="row_two">
            { generator.boardHexes[3] } [{ generator.boardNumbers[3] }]
            { generator.boardHexes[4] } [{ generator.boardNumbers[4] }]  
            { generator.boardHexes[5] } [{ generator.boardNumbers[5] }]
            { generator.boardHexes[6] } [{ generator.boardNumbers[6] }]
        </div>

        <div class= "row" id="row_three">
            { generator.boardHexes[7] } [{ generator.boardNumbers[7] }] 
            { generator.boardHexes[8] } [{ generator.boardNumbers[8] }]  
            { generator.boardHexes[9] } [{ generator.boardNumbers[9] }]
            { generator.boardHexes[10] } [{ generator.boardNumbers[10] }]
            { generator.boardHexes[11] } [{ generator.boardNumbers[11] }]
        </div>

        <div class= "row" id="row_four">
            { generator.boardHexes[12] } [{ generator.boardNumbers[12] }]  
            { generator.boardHexes[13] } [{ generator.boardNumbers[13] }]  
            { generator.boardHexes[14] } [{ generator.boardNumbers[14] }]
            { generator.boardHexes[15] } [{ generator.boardNumbers[15] }]
        </div>

        <div class= "row" id="row_five">
            { generator.boardHexes[16] } [{ generator.boardNumbers[16] }],  
            { generator.boardHexes[17] } [{ generator.boardNumbers[17] }], 
            { generator.boardHexes[18] } [{ generator.boardNumbers[18] }] 
        </div>
      </div>
      <br></br>
    </div>
  )}

export default ImageGenerator;
