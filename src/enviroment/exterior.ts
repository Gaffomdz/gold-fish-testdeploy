import { Scene } from "src/congif/core/scene"
import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { robotNPC } from "src/npc/npcCreator"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import { Interior } from "./interior"


class ExteriorInstance extends Scene {

    private exteriorEntity = new Entity()

    constructor() {
        super(SceneLocations.Exterior)
        this.addComponent(new GLTFShape('models/enviroment/gf_ext_col_1.glb'))
        this.exteriorEntity.addComponent(new GLTFShape('models/enviroment/gf_ext_1.glb'))

        this.exteriorEntity.setParent(this)

        this.createRobot()
    }
    createRobot(){
        // this.robot.robotTeleport = () => this.enter(
        //     new Vector3(0, 0, 0),
        //     new Vector3(20, 1, 20),
        // )
        engine.addEntity(robotNPC)
        robotNPC.setParent(this)
    }
    enter(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.Interior)
        Interior.createPickaxe()
        movePlayerToVector3(position, direction)
        this.extraDeload()
    }

    extraDeload(){
        // if(this.robot.alive == true){
        //     engine.removeEntity(this.robot)
        //     log('Robot was alive, and removed in debug')
        // }else{
        //     log('Robot was not alive')
        // }
    }



}

export const Exterior = new ExteriorInstance()

