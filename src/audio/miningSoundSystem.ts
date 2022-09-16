import { Dash_Cache_AudioSource } from "src/congif/cache/audiosource"
import { getRandomInt } from "src/utils/random"
import { MusicSystem } from "src/audio/miningSounds"



declare const Map: any

class miningSoundSystem extends Entity {
    public shape: BoxShape = new BoxShape()
    public localAudio: typeof Map = new Map()
    public externalAudio: typeof Map = new Map()
    public source: AudioSource | AudioStream | undefined

    constructor(){
        super()
        engine.addEntity(this)
        this.addComponent(this.shape)
        this.addComponentOrReplace(new Transform({
            scale: new Vector3().setAll(0),
        }))
        this.shape.withCollisions = false
        this.setParent(Attachable.FIRST_PERSON_CAMERA)


            let randomizer = getRandomInt(0,3)
            let new23 = MusicSystem[randomizer].list[randomizer]
            const audioSource = Dash_Cache_AudioSource.create(new23)
            log('Should be playing a new scene audio file!!!', 1, new23)
            audioSource.playing = true
            audioSource.loop = false
            audioSource.volume = .5
            audioSource.playedAtTimestamp = 0
            this.addComponentOrReplace(audioSource)
            log(audioSource)

    }

    playSound_Hit(){
        let randomizer = getRandomInt(0,5)
        let new23 = MusicSystem[0].list[randomizer]
        const audioSource = Dash_Cache_AudioSource.create(new23)
        audioSource.playing = true
        audioSource.loop = false
        audioSource.volume = .5
        audioSource.playedAtTimestamp = 0
        this.addComponentOrReplace(audioSource)
    }

    playSound_Miss(){

    }
    playSound_Crit(){
        const audioSource = Dash_Cache_AudioSource.create(MusicSystem[0].list[1])
        audioSource.playing = true
        audioSource.loop = false
        audioSource.volume = .5
        audioSource.playedAtTimestamp = 0
        this.addComponentOrReplace(audioSource)

    }

    stop(){
        if(this.source) this.source.playing = false
    }
}

export const miningSounds = new miningSoundSystem()