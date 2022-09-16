import { Dash_Cache_AudioClip } from "./audioclip"

declare const Map: any

class Dash_Cache_AudioSource_Instance {
    private clips: typeof Map = new Map()
    // private clips: TypeMap<string, AudioSource> = new _Map()

    create(src: string): AudioSource {
        if(this.clips.has(src)) return this.clips.get(src)!
        const clip = new AudioSource(Dash_Cache_AudioClip.create(src))
        this.clips.set(src, clip)
        return clip
    }
}

export const Dash_Cache_AudioSource = new Dash_Cache_AudioSource_Instance()
