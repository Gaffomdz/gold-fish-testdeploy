import { Exterior } from "src/enviroment/exterior"
import { Interior } from "src/enviroment/interior"
import { Scene } from "./core/scene"
import { SceneLocations } from "./enums"


export const SceneEntities: {[key: number] : Scene } = {
    [SceneLocations.Exterior]: Exterior,
    [SceneLocations.Interior]: Interior,
}

export const getSceneEntityFromLocation = (location: SceneLocations) : (Scene | undefined) => {
    return SceneEntities[location]
}