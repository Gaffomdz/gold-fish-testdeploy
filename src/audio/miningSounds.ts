

export interface MusicInterface{
    [key:number] : {
        list: string[]
    }
}

export const MusicSystem: MusicInterface = { 
    [0]: {
        list: [
        
            'sound/hit1.mp3',
            'sound/hit2.mp3',
            'sound/hit3.mp3',
            'sound/hit4.mp3',
            'sound/hit5.mp3',
            'sound/hit6.mp3']
    },
    [1]: {
        list: [
            'sound/miss1.mp3',
            'sound/miss2.mp3',
            'sound/miss3.mp3']
    },
    [2]:{
        list: [
            'sound/criticalDMG.wav'
        ]
    }
    

}
