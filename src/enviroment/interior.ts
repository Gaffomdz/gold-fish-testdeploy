import { Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneLocations } from "src/congif/enums"
import { EmptyRock } from "./emptyRock"
import { Rock } from "./rock"


class InteriorInstance extends Scene {

    private interior1Entity = new Entity()

    private pickAxe = new Entity()

    private input = Input.instance

    
    
    
    
    //Enter Hallway
    private rock1 = new Rock(3, 1, new Vector3(7.27, 0.88, 39.89))
    private rock2 = new Rock(3, 4, new Vector3(15.66, 0.88, 44.67))
    //Down Cave 1
    private rock3 = new Rock(3, 5, new Vector3(40.29, 0.88, 59.64))
    private rock4 = new Rock(3, 2, new Vector3(49.22, 0.88, 58.15))
    private rock5 = new Rock(3, 7, new Vector3(35.99, 0.88, 44.80))
    private rock6 = new Rock(3, 1, new Vector3(35.21, 0.88, 50.84))
    private rock7 = new Rock(3, 3, new Vector3(47.38, 0.88, 52.70))
    private rock8 = new Rock(3, 2, new Vector3(48.15, 0.88, 49.23))
    private rock9 = new Rock(3, 5, new Vector3(47.38, 0.88, 60.70))
    private rock10 = new Rock(3, 3, new Vector3(47.38, 0.88, 65.70))
    private rock11 = new Rock(3, 7, new Vector3(33.84, 0.88, 47.72))
    private rock12 = new Rock(3, 2, new Vector3(33.84, 0.88, 50.72))
    private rock13 = new Rock(3, 1, new Vector3(34.12, 0.88, 45.79))
    private rock14 = new Rock(3, 3, new Vector3(40.49, 0.88, 46.40))
    //Down Cave 2
    private rock15 = new Rock(3, 3, new Vector3(45.48, 0.88, 9.14))
    private rock16 = new Rock(3, 4, new Vector3(37.35, 0.88, 23.71))
    //Up Hallway
    private rock17 = new Rock(3, 3, new Vector3(3.79, 20.84, 46.14))
    private rock18 = new Rock(3, 5, new Vector3(3.99, 20.84, 51.60))
    //Up Cave
    private rock19 = new Rock(3, 8, new Vector3(12.52, 20.84, 62.33))
    private rock20 = new Rock(3, 1, new Vector3(11.02, 20.84, 55.24))
    private rock21 = new Rock(3, 2, new Vector3(13.09, 20.84, 48.03))
    private rock22 = new Rock(3, 2, new Vector3(10.51, 20.86, 22.48))
    private rock23 = new Rock(3, 6, new Vector3(25.38, 20.99, 3.66))
    
    private bigBolder1 = new EmptyRock(3, 0, new Vector3(0, 0, 0))
    private bigBolder2 = new EmptyRock(3, 0, new Vector3(0, 0, 0))
    private bigBolder3 = new EmptyRock(3, 0, new Vector3(0, 0, 0))
    private bigBolder4 = new EmptyRock(3, 0, new Vector3(0, 0, 0))
    private bigBolder5 = new EmptyRock(3, 0, new Vector3(0, 0, 0))

    private smallBolder = new Entity()

    private fish1 = new Entity()
    private fish2 = new Entity()
    private fish3 = new Entity()
    private fish4 = new Entity()


    constructor() {
        //geo
        super(SceneLocations.Interior)
        this.addComponent(new GLTFShape('models/enviroment/gf_int_col_1.glb'))
        this.interior1Entity.addComponent(new GLTFShape('models/enviroment/gf_int_geo_1.glb'))
        this.bigBolder1.addComponent(new GLTFShape('models/enviroment/gf_int_bigbolders_1.glb'))
        this.bigBolder2.addComponent(new GLTFShape('models/enviroment/gf_int_bigbolders2_1.glb'))
        this.bigBolder3.addComponent(new GLTFShape('models/enviroment/gf_int_bigbolders3_1.glb'))
        this.bigBolder4.addComponent(new GLTFShape('models/enviroment/gf_int_bigbolders4_1.glb'))
        this.bigBolder5.addComponent(new GLTFShape('models/enviroment/gf_int_bigbolders5_1.glb'))
        this.smallBolder.addComponent(new GLTFShape('models/enviroment/gf_int_smallbolders_1.glb'))
        this.fish1.addComponent(new GLTFShape('models/enviroment/gf_int_fish_1.glb'))
        this.fish2.addComponent(new GLTFShape('models/enviroment/gf_int_fish_2.glb'))
        this.fish3.addComponent(new GLTFShape('models/enviroment/gf_int_fish_3.glb'))
        this.fish4.addComponent(new GLTFShape('models/enviroment/gf_int_fish_4.glb'))


        this.rocks()

        this.bigBolder1.setParent(this)
        this.bigBolder2.setParent(this)
        this.bigBolder3.setParent(this)
        this.bigBolder4.setParent(this)
        this.bigBolder5.setParent(this)
        this.smallBolder.setParent(this)

        this.fish1.setParent(this)
        this.fish2.setParent(this)
        this.fish3.setParent(this)
        this.fish4.setParent(this)

    }
    preload() {
        engine.addEntity(this)
        log('Interior Preloaded!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            engine.removeEntity(this.pickAxe)
            log('Interior Removed')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, -0.65, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    createPickaxe() {
        //PickAxe
        this.pickAxe.addComponent(new GLTFShape('models/game/Pickaxe_Animated.glb'))
        this.pickAxe.addComponent(
            new Transform({
                position: new Vector3(0.310, -0.300, 0.400),
                scale: new Vector3(1.000, 1.000, 1.000)
            })
        )
        this.pickAxe.addComponent(new Animator())
        this.pickAxe.getComponent(Animator).addClip(new AnimationState("Idle", { layer: 0, weight: 0.01 }))
        this.pickAxe.getComponent(Animator).addClip(new AnimationState("Walk", { layer: 1, weight: 0.01 }))
        this.pickAxe.getComponent(Animator).addClip(new AnimationState("Swing", { layer: 2, weight: 0.9, speed: 3 }))
        this.pickAxe.getComponent(Animator).getClip('Idle').play()
        this.pickAxe.getComponent(Animator).getClip('Walk').stop()
        this.pickAxe.getComponent(Animator).getClip('Swing').looping = false

        this.input.subscribe("BUTTON_DOWN", ActionButton.POINTER, false, (e) => {
            log("pointer Down", e)
            this.pickAxe.getComponent(Animator).getClip('Swing').play()
        })
        engine.addEntity(this.pickAxe)

        //Parents
        this.pickAxe.setParent(Attachable.FIRST_PERSON_CAMERA)

        this.interior1Entity.setParent(this)
    }
    rocks() {
        [this.rock1, this.rock2, this.rock3, this.rock4, this.rock5, this.rock6, this.rock7, this.rock8, this.rock9,
        this.rock10, this.rock11, this.rock12, this.rock13, this.rock14, this.rock15, this.rock16, this.rock17, this.rock18, this.rock19,
        this.rock20, this.rock21, this.rock22, this.rock23].forEach(rocks => {
            rocks.setParent(this)
        })


    }
}
export const Interior = new InteriorInstance()
