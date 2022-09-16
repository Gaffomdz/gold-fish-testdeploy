import { SceneController } from "./congif/core/sceneController"
import { SceneLocations } from "./congif/enums"
import { SceneEntities } from "./congif/scenes"
import { Interior } from "./enviroment/interior"
import { createWelcomePrompt } from "./prompts/prompts"

class GameController {
  private scenes = SceneEntities

  constructor() {
    SceneController.loadScene(SceneLocations.Exterior)
    Interior.preload()
  }

}
createWelcomePrompt()
new GameController()









