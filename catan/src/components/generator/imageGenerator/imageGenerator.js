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
import fiveImp from './numbers/five.png'
import sixImp from './numbers/six.png'
import eightImp from './numbers/eight.png'
import nineImp from './numbers/nine.png'
import tenImp from './numbers/ten.png'
import elevenImp from './numbers/eleven.png'
import twelveImp from './numbers/twelve.png'


function ImageGenerator() {

  let wheat = <img src={wheatImp} class="hex"/>
  let brick = <img src={brickImp} class="hex"/>
  let desert = <img src={desertImp} class="hex"/>
  let lumber = <img src={lumberImp} class="hex"/>
  let ore = <img src={oreImp} class="hex"/>
  let sheep = <img src={sheepImp} class="hex"/>

  let two = <img src={twoImp} class="number_img"/>
  let three = <img src={threeImp} class="number_img"/>
  let four = <img src={fourImp} class="number_img"/>
  let five = <img src={fiveImp} class="number_img"/>
  let six = <img src={sixImp} class="number_img"/>
  let eight = <img src={eightImp} class="number_img"/>
  let nine = <img src={nineImp} class="number_img"/>
  let ten = <img src={tenImp} class="number_img"/>
  let eleven = <img src={elevenImp} class="number_img"/>
  let twelve = <img src={twelveImp} class="number_img"/>

  let hexes = [wheat, wheat, wheat, ore, ore, ore, brick, brick, brick, brick, sheep, sheep, sheep, sheep, lumber, lumber, lumber, lumber, desert]

  let numbers = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]

  let num_imgs = [five, two, six, three, eight, ten, nine, twelve, eleven, four, eight, ten, nine, four, five, six, three, eleven]

  let ports = ["sheep", "lumber", "ore", "wheat", "three", "three", "three", "three"]

  let generator = new GeneratorLogic(hexes, num_imgs, ports, desert, "robber")
  generator.makeMap()

  return (
    <div className="Generator-images">
      <p>Hit refresh to generate a new map.</p>
      <br></br>
      <br></br>
      <div id="board">
        <div class="row" id="row_one">
          <span class="hex-parent">
            { generator.boardHexes[0] } 
            { generator.boardNumbers[0] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[1] } 
            { generator.boardNumbers[1] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[2] } 
            { generator.boardNumbers[2] }
          </span>
        </div>
        
        <div class="row" id="row_two">
          <span class="hex-parent">
            { generator.boardHexes[3] } 
            { generator.boardNumbers[3] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[4] } 
            { generator.boardNumbers[4] }  
          </span>
          <span class="hex-parent">
            { generator.boardHexes[5] } 
            { generator.boardNumbers[5] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[6] }
            { generator.boardNumbers[6] }
          </span>
        </div>

        <div class="row" id="row_three">
          <span class="hex-parent">
            { generator.boardHexes[7] } 
            { generator.boardNumbers[7] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[8] } 
            { generator.boardNumbers[8] }  
          </span>
          <span class="hex-parent">
            { generator.boardHexes[9] } 
            { generator.boardNumbers[9] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[10] } 
            { generator.boardNumbers[10] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[11] } 
            { generator.boardNumbers[11] }
          </span>
        </div>

        <div class="row" id="row_four">
          <span class="hex-parent">
            { generator.boardHexes[12] } 
            { generator.boardNumbers[12] }  
          </span>
          <span class="hex-parent">
            { generator.boardHexes[13] } 
            { generator.boardNumbers[13] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[14] } 
            { generator.boardNumbers[14] }
          </span>
          <span class="hex-parent">
            { generator.boardHexes[15] } 
            { generator.boardNumbers[15] }
          </span>
        </div>

        <div class="row" id="row_five">
            { generator.boardHexes[16] } { generator.boardNumbers[16] }  
            { generator.boardHexes[17] } { generator.boardNumbers[17] } 
            { generator.boardHexes[18] } { generator.boardNumbers[18] }
        </div>
      </div>
      <br></br>
    </div>
  )}

export default ImageGenerator;
