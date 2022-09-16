import * as ui from '@dcl/ui-scene-utils'
import { SceneController } from 'src/congif/core/sceneController'
import { SceneLocations } from 'src/congif/enums'
import { movePlayerToVector3 } from 'src/utils/movePlayerToVector3'


export function createFinishPrompt() {
    // let prompt = new ui.OptionPrompt(
    //     'You find 22 Goldfish Crackers!',
    //     'Do you want to claim your bonus or continue playing?',
    //     () => {
    //         log(`Claim my bonus`)
    //         SceneController.loadScene(SceneLocations.Exterior)
    //         movePlayerToVector3(
    //             new Vector3(31.30, 0.88, 78.07),
    //             new Vector3(31.23, 0.88, 73.62),)

    //     },
    //     () => {
    //         log(`Continue playing`)
    //     },
    //     'CLAIM',
    //     'PLAY',
    // )
    const canvas = new UICanvas()
    const finishPrompt = new UIImage(canvas, new Texture("images/prompts/CaveElements-04.png"))
    finishPrompt.name = "Coins Counter"
    finishPrompt.width = "1067px"
    finishPrompt.height = "533px"
    finishPrompt.sourceWidth = 4267
    finishPrompt.sourceHeight = 2134
    finishPrompt.hAlign = 'center'
    finishPrompt.vAlign = 'center'
    finishPrompt.positionX = 0
    finishPrompt.positionY= 0
    finishPrompt.onClick = (new OnPointerDown(() => {
        log('click remove prompt')
        finishPrompt.visible = false
    }))

}

export function createWelcomePrompt() {
    const canvas = new UICanvas()
    const welcomePrompt = new UIImage(canvas, new Texture("images/prompts/CaveElements-01.png"))
    welcomePrompt.name = "Coins Counter"
    welcomePrompt.width = "1067px"
    welcomePrompt.height = "533px"
    welcomePrompt.sourceWidth = 4267
    welcomePrompt.sourceHeight = 2134
    welcomePrompt.hAlign = 'center'
    welcomePrompt.vAlign = 'center'
    welcomePrompt.positionX = 0
    welcomePrompt.positionY= 0
    welcomePrompt.onClick = (new OnPointerDown(() => {
        log('click remove prompt')
        welcomePrompt.visible = false
    }))
}

export function createFishPrompt1() {
    const canvas = new UICanvas()
    const fishPrompt1 = new UIImage(canvas, new Texture("images/prompts/CaveElements-06.png"))
    fishPrompt1.name = "Coins Counter"
    fishPrompt1.width = "1067px"
    fishPrompt1.height = "533px"
    fishPrompt1.sourceWidth = 4267
    fishPrompt1.sourceHeight = 2134
    fishPrompt1.hAlign = 'center'
    fishPrompt1.vAlign = 'center'
    fishPrompt1.positionX = 0
    fishPrompt1.onClick = (new OnPointerDown(() => {
        log('click remove prompt')
        fishPrompt1.visible = false
        createFishPrompt2()
    }))
}

function createFishPrompt2() {
    const canvas = new UICanvas()
    const FishPrompt2 = new UIImage(canvas, new Texture("images/prompts/CaveElements-08.png"))
    FishPrompt2.name = "Coins Counter"
    FishPrompt2.width = "760px"
    FishPrompt2.height = "628px"
    FishPrompt2.sourceWidth = 3041
    FishPrompt2.sourceHeight = 2514
    FishPrompt2.hAlign = 'center'
    FishPrompt2.vAlign = 'center'
    FishPrompt2.positionX = 0
    FishPrompt2.onClick = (new OnPointerDown(() => {
        log('click remove prompt')
        FishPrompt2.visible = false
    }))
}

