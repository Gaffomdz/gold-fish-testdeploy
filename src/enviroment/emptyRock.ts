import { Dash_AnimationQueue, Dash_Ease, Dash_Material, Dash_Wait } from "dcldash"
import { miningSounds } from "src/audio/miningSoundSystem"
import { greenMaterial, redMaterial, whiteMaterial, yellowMaterial } from "src/congif/basicMaterials"

let weild = true

export class EmptyRock extends Entity{
    public personalhealth
    public animationCounter = 0
    public currentlyAnimating = false
    private shape = new GLTFShape('')

    constructor(health: number, modifier: number, position: Vector3) {
        super()

        this.addComponent(new Transform({
            position: new Vector3(modifier, modifier, modifier)
        }))

       this.personalhealth = health

        this.addComponent(new OnPointerDown(()=>{
            if(weild == true){
                this.personalhealth = this.personalhealth-1
                this.healthcheck()
            }

        }))
       

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
                    engine.removeEntity(this)
                }
            })
        }, 0.2)

    }

    onHoverEnter(){
        this.animationCounter = 0
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
                    transform.scale.setAll(easeValue)
                },
                onComplete: () => {
                    log('Animation Done!')
    
                    Dash_AnimationQueue.add({
                        duration: 2.5,
                        data: { someval: 'foo' }, // optionally pass along some data that is accessible every frame
                        onFrame: (progress, data) => {
                            const transform = this.getComponent(Transform)
                            const easeValue = Scalar.Lerp(1.25, 1, Dash_Ease.easeInElastic(progress))
                            transform.scale.setAll(easeValue)
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
            log('hit1')
            this.addComponent(new Transform({ scale: new Vector3(0.75, 0.75, 0.75) }))

        }
        if(this.personalhealth == 2){
            log('hit2')
            this.addComponent(new Transform({ scale: new Vector3(0.50, 0.50, 0.50) }))


        }
        if(this.personalhealth == 1){
            log('hit3')
            this.addComponent(new Transform({ scale: new Vector3(0.20, 0.20, 0.20) }))

        }

    }
}