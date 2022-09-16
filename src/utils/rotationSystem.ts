  export class rotationSystem implements ISystem {
    private timer: number = 0
    public entity = new Entity()

    update(dt: number){
      this.timer += dt
    this.entity.getComponent(Transform).rotation = new Quaternion().setEuler(0,this.timer*8,0)
       
    }
  }