import geo3js from 'geo3js'

const obj = new geo3js()
const {scene, camera, renderer, three} = await obj.init()

scene.add(await obj.createStars(10000, 2, 0xffffff))

function animate(){
    camera.rotation.x += 0.0005; 
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)