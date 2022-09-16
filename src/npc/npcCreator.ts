import { NPC, NPCDelay } from "@dcl/npc-scene-utils";
import { SceneController } from "src/congif/core/sceneController";
import { SceneLocations } from "src/congif/enums";
import { Interior } from "src/enviroment/interior";
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3";

export const robotNPC = new NPC({
  position: new Vector3(36.76, 0, 57.21),
  rotation: Quaternion.Euler(0, 180, 0)
},
  'models/npc/gf_npc_animated.glb',
  () => {
    // animation
    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        robotNPC.playAnimation('Talking')
      })
    )
    engine.addEntity(dummyent)


    // dialog UI
    robotNPC.talk([

      {
        text: "",
        image: {
          offsetX: -300,
          offsetY: 90,
          path: 'images/prompts/CaveElements-02.png',
          height: 617,
          width: 1024,
          section: {
            sourceHeight: 617,
            sourceWidth: 1024
          }
        },
        isQuestion: true,
        buttons: [
          { label: 'Play', goToDialog: 2, triggeredActions: () => {
            SceneController.loadScene(SceneLocations.Interior)
            Interior.createPickaxe()
            movePlayerToVector3(
              new Vector3(2.58, 0.88, 35.51),
              new Vector3(5.28, 0.88, 36.07),)} },

          { label: 'Leave', goToDialog: 1 },
        ]
      },
      {
        image: {
          offsetX: -300,
          offsetY: 20,
          path: 'images/prompts/CaveElements-03.png',
          height: 533,
          width: 1066,
          section: {
            sourceHeight: 1480,
            sourceWidth: 3041
          }
        },
        text: '',
        isQuestion: true,
        buttons: [
          { label: 'Claim', goToDialog: 3, offsetX: -100, offsetY: -20, },

        ]
      },
      {
        text: "",
        image: {
          offsetX: -350,
          offsetY: 40,
          path: 'images/prompts/CaveElements-07.png',
          height: 628,
          width: 800,
          section: {
            sourceHeight: 2514,
            sourceWidth: 3041
          }
        },
        isEndOfDialog: true,
        triggeredByNext() {

        },
      }

    ])
  },
  {
    faceUser: true,
    onWalkAway: () => {
      robotNPC.playAnimation('Idle', true, 2)
    },
    textBubble:false,
  }
  
)



