import { Engine, World, Bodies } from 'matter-js'

let startEngine = () => {
    console.log("engine started")
    let engine = Engine.create()
    var boxA = Bodies.rectangle(-100, -100, 80, 80, { width: 80, height: 80 });
    var boxB = Bodies.rectangle(-50, 50, 80, 80, { width: 80, height: 80 })
    var ground = Bodies.rectangle(-500, 425, 1000, 60, { width: 1000, height: 60, isStatic: true });
    World.add(engine.world, [boxA, boxB, ground]);
    Engine.run(engine);
    return engine
}

export default startEngine
