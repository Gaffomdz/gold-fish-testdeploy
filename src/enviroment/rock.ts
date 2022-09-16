import { Dash_AnimationQueue, Dash_Ease, Dash_Material, Dash_Wait } from "dcldash"
import { miningSounds } from "src/audio/miningSoundSystem"
import { coinCreator } from "src/coins/coinsCreator"
import { greenMaterial, redMaterial, whiteMaterial, yellowMaterial } from "src/congif/basicMaterials"

let weild = true

export class Rock extends Entity{
    public personalhealth
    public animationCounter = 0
    public currentlyAnimating = false
    public fish = new coinCreator()
    

    constructor(health: number, modifier: number, position: Vector3) {
        super()

        this.fish.addComponent(new Transform({
            position: position,
            scale: new Vector3(0,0,0)
        }))

        this.addComponent(new GLTFShape('models/enviroment/gf_int_smallbolders1_1.glb'))
        this.addComponent(new Transform({
            position: position,
            scale: new Vector3(modifier, modifier, modifier)
        }))

       this.personalhealth = health

        this.addComponent(new OnPointerDown(()=>{
            if(weild == true){
                this.personalhealth = this.personalhealth-1
                this.healthcheck()
            }

        }))
        this.addComponent(whiteMaterial)

        this.addComponent(new OnPointerHoverEnter(()=> {
            this.onHoverEnter()
        }))

        this.addComponent(new OnPointerHoverExit(()=>{
            this.onHoverExit()
        }))
    
    }
    healthcheck(){
        log('healtcheck')

        if(this.personalhealth == 3){
            miningSounds.playSound_Hit()
            this.addComponentOrReplace(whiteMaterial)
        }
        if(this.personalhealth == 2){
            miningSounds.playSound_Hit()
            this.addComponentOrReplace(yellowMaterial)
        }
        if(this.personalhealth == 1){
            miningSounds.playSound_Hit()
            this.addComponentOrReplace(redMaterial)
        }
        if(this.personalhealth <=0){
            //play breaking animation
            //move to onDestroy
            this.onDestroy()
            miningSounds.playSound_Hit()
        }

    }
    spawnFish(){

    }
    onDestroy(){
        Dash_Wait(() => {
                
            Dash_AnimationQueue.add({
                duration: 0.8,
                data: { someval: 'foo'}, // optionally pass along some data that is accessible every frame
                onFrame: (progress, data) => {
                    const transform = this.getComponent(Transform)
                    const easeValue = Scalar.Lerp(this.getComponent(Transform).scale.x, 0, Dash_Ease.easeInExpo(progress))
                    transform.scale.setAll(easeValue)
                },
                onComplete: () => {
                    engine.addEntity(this.fish)
                    this.fish.scalarTest()
                    engine.removeEntity(this)
                }
            })
        }, 0.2)

    }

    onHoverEnter(){
        this.addComponentOrReplace(greenMaterial)
        this.animationCounter = 1
        this.onHoverAnimation()

    }
    onHoverAnimation(){
        if(this.animationCounter == 1){
            if(this.currentlyAnimating == false){
                this.currentlyAnimating = true

            Dash_AnimationQueue.add({
                duration: 2.5,
                data: { someval: 'foo' }, // optionally pass along some data that is accessible every frame
                onFrame: (progress, data) => {
                    const transform = this.getComponent(Transform)
                    const easeValue = Scalar.Lerp(1, 1.25, Dash_Ease.easeOutElastic(progress))
                    // transform.scale.setAll(easeValue)
                },
                onComplete: () => {
                    log('Animation Done!')
    
                    Dash_AnimationQueue.add({
                        duration: 2.5,
                        data: { someval: 'foo' }, // optionally pass along some data that is accessible every frame
                        onFrame: (progress, data) => {
                            const transform = this.getComponent(Transform)
                            const easeValue = Scalar.Lerp(1.25, 1, Dash_Ease.easeInElastic(progress))
                            // transform.scale.setAll(easeValue)
                        },
                        onComplete: () => {
                            this.currentlyAnimating = false
                            this.onHoverAnimation()
                        }
                    })
    
                }
            })
        }
    
        }
    }
    onHoverExit(){
        this.animationCounter = 0

        if(this.personalhealth == 3){
            this.addComponentOrReplace(whiteMaterial)

        }
        if(this.personalhealth == 2){
            this.addComponentOrReplace(yellowMaterial)


        }
        if(this.personalhealth == 1){
            this.addComponentOrReplace(redMaterial)

        }

    }
}