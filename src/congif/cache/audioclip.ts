declare const Map: any

class Dash_Cache_AudioClip_Instance {
    private clips: typeof Map = new Map()
    // private clips: TypeMap<string, AudioClip> = new _Map()

    create(src: string): AudioClip {
        if(this.clips.has(src)) return this.clips.get(src)!
        const clip = new AudioClip(src)
        this.clips.set(src, clip)
        return clip
    }
}

export const Dash_Cache_AudioClip = new Dash_Cache_AudioClip_Instance()
