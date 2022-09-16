import * as utils from '@dcl/ecs-scene-utils'
import { Dash_AnimationQueue, Dash_Ease } from 'dcldash'
import { rotationSystem } from 'src/utils/rotationSystem'
import { addCoin } from './coincounter'

export class coinCreator extends Entity {
    private shape: GLTFShape = new GLTFShape('models/game/GoldFish02.glb')
    public onClick: () => void = () => { }
    public onCameraEnter: () => void = () => { }
    private triggerBox = new utils.TriggerBoxShape()
    private rotate = new rotationSystem()

    private highlight = new Entity()
    private sparkle = new Entity()
    

    constructor() {
        super()
        this.addComponent(this.shape)
        this.updateOnTrigger()

        this.sparkle.addComponent(new GLTFShape('models/game/GoldFish02_sparkle.glb'))
        engine.addEntity(this.sparkle)
        this.sparkle.setParent(this)

        this.highlight.addComponent(new GLTFShape('models/game/GoldFish_Highlight.glb'))
        engine.addEntity(this.highlight)
        this.highlight.addComponentOrReplace(new Transform({
            scale: new Vector3(0,0,0)
        }))
        this.highlight.setParent(this)

        this.addComponent(new OnPointerHoverEnter(()=>{
            this.highlight.addComponentOrReplace(new Transform({
                scale: new Vector3(1,1,1)
            }))

        }))

        this.addComponent(new OnPointerHoverExit(()=>{
            this.highlight.addComponentOrReplace(new Transform({
                scale: new Vector3(0,0,0)
            }))

        }))

    }

    private updateOnTrigger() {
        this.addComponentOrReplace(
            new utils.TriggerComponent(
                this.triggerBox, //shape
                {
                    onCameraEnter: () => {
                        log('triggered!')
                        engine.removeEntity(this)
                        addCoin(1)
                        
                    }
                }
            )
        )
    }
    public scalarTest(){

        Dash_AnimationQueue.add({
            duration: 0.8,
            data: { someval: 'foo'}, // optionally pass along some data that is accessible every frame
            onFrame: (progress, data) => {

                this.rotate.entity = this
                engine.addSystem(this.rotate)

                const transform = this.getComponent(Transform)
                const easeValue = Scalar.Lerp(0, 1, Dash_Ease.easeOutCirc(progress))
                transform.scale.setAll(easeValue)
            },
            onComplete: () => {
            }


})

    }

}



/*

Dash_AnimationQueue.add({
                        duration: 0.3,
                        data: {someval: 'foo'},
                        onFrame: (progress, data) => {
                            const transform = this.coin1.getComponent(Transform)
                            const easeValue = Scalar.Lerp(0, 1, Dash_Ease.easeOutExpo(progress))
                            transform.scale.setAll(easeValue)
                        },
                        onComplete:()=>{

                        }
                    })





*/

