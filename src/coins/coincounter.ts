import {  UICounter } from "@dcl/ui-scene-utils";
import {  createFinishPrompt, createFishPrompt1 } from "../prompts/prompts";

let credits = 0
export function addCoin(amount: number) {
  credits += amount

  coinCounter.increase(amount)
  log("contador", credits, amount)
  if (credits == 22) { // set up credits in 22 when game is ready
    log('cartelito')
    createFinishPrompt()
  }
  if (credits == 1) { 
    log('first fish prompt')
    createFishPrompt1()
  }
}

const canvas = new UICanvas()
const coinsCounter = new UIImage(canvas, new Texture("images/ui/GOLDFISH_WorkingFile-11.png"))
coinsCounter.name = "Coins Counter"
coinsCounter.width = "116px"
coinsCounter.height = "43px"
coinsCounter.sourceWidth = 116
coinsCounter.sourceHeight = 43
coinsCounter.hAlign = 'right'
coinsCounter.vAlign = 'bottom'
coinsCounter.positionX = -15

const coinCounter = new UICounter(credits, -10, -3, Color4.Black(), 22, true)


//Hide the FPS panel to see the coincounter