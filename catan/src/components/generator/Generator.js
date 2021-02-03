// import React, { component } from 'react'
import GeneratorLogic from './Generator-logic.js'

function Generator() {

  let hexes = ["wheat", "wheat", "wheat", "wheat", "ore", "ore", "ore", "brick", "brick", "brick", "sheep", "sheep", "sheep", "sheep", "lumber", "lumber", "lumber", "lumber", "desert"]

  let numbers = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]

  let ports = ["sheep", "lumber", "ore", "wheat", "three", "three", "three", "three"]

  let generator = new GeneratorLogic(hexes, numbers, ports)
  generator.allocateHexes()
  generator.allocateNumbers()

  return (
    <div className="Generator">
      <div id="row_one">
        <p> 
          { generator.boardHexes[0] } [{ generator.boardNumbers[0] }],  
          { generator.boardHexes[1] } [{ generator.boardNumbers[1] }], 
          { generator.boardHexes[2] } [{ generator.boardNumbers[2] }] 
        </p>
      </div>
      
      <div id="row_two">
        <p> 
          { generator.boardHexes[3] } [{ generator.boardNumbers[3] }],  
          { generator.boardHexes[4] } [{ generator.boardNumbers[4] }], 
          { generator.boardHexes[5] } [{ generator.boardNumbers[5] }],
          { generator.boardHexes[6] } [{ generator.boardNumbers[6] }],
        </p>
      </div>
    </div>
  )}

export default Generator;
