import './style.css'
import geo3js from 'geo3js'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const obj = new geo3js()

const webgl = async (id) => {
    const item = document.getElementById(id)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000); 

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000); 
    camera.position.set(0, 0, 30); 

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#" + id), 
      antialias: true, 
      depth: true
    })
    renderer.shadowMap.enabled = true; 
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(item.getBoundingClientRect().width, item.getBoundingClientRect().height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.render(scene, camera)

    const controls = new OrbitControls(camera, renderer.domElement)

    return {"scene": scene, "camera": camera, "renderer": renderer, "controls": controls}

}
const items = async (id, index) => {

  const {scene, camera, renderer, controls} = await webgl(id)

  if(index == 1){
    const box = await obj.createBox(0, 0, 0, 1, 0xffffff)
    camera.name = "1"
    box.rotation.x = 15; 
    scene.add(box)

    function animate(){
      box.rotation.x += 0.0005
      box.rotation.y += Math.random() * 0.005 + 0.0005; 
      box.rotation.z -= Math.random() * 0.005 + 0.0005; 

      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    renderer.render(scene, camera)
  }
  else if(index == 2){
    const sphere = await obj.createSphere(0, 0, 0, 7, 0xffffff)
    camera.name = "2"
    sphere.rotation.x = 15; 

    scene.add(sphere)

    function animate(){
      sphere.rotation.x += 0.0005
      sphere.rotation.y += Math.random() * 0.005 + 0.0005; 
      sphere.rotation.z -= Math.random() * 0.005 + 0.0005; 

      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    renderer.render(scene, camera)
  }
  else if(index == 3){
    const triangle = await obj.createTriangle(0, 0, 0, 1, 0xffffff)
    camera.name = "3"
    triangle.rotation.x = 15; 
    triangle.rotation.z = 5;
    triangle.rotation.y = 15; 
    scene.add(triangle)

    function animate(){
      triangle.rotation.x += 0.0005
      triangle.rotation.y -= 0.0005
      triangle.rotation.z += 0.0005

      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    renderer.render(scene, camera)
  }
  else if(index == 4){
    const torus = await obj.createTorus(0, 0, 0, 0.5, 0xffffff)
    camera.name = "4"
    torus.rotation.x = 15; 

    scene.add(torus)

    function animate(){
      torus.rotation.x += 0.005
      torus.rotation.y += Math.random() * 0.005 + 0.0005; 
      torus.rotation.z -= Math.random() * 0.005 + 0.0005;
      
      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    renderer.render(scene, camera)
  }
  else if(index == 5){
    const cylinder = await obj.createCylinder(0, 0, 0, 0.5, 0xffffff)
    camera.name = "5"
    scene.add(cylinder)

    function animate(){
      cylinder.rotation.x += 0.005
      cylinder.rotation.y += Math.random() * 0.005 + 0.0005; 
      cylinder.rotation.z -= Math.random() * 0.005 + 0.0005; 

      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    renderer.render(scene, camera)
  }
  else if(index == 6){
    const plane = await obj.createPlane(0, 0, 0, 2, 0xffffff)
    camera.name = "6"
    scene.add(plane)

    function animate(){
      plane.rotation.x += 0.005
      plane.rotation.y += Math.random() * 0.005 + 0.0005; 
      plane.rotation.z -= Math.random() * 0.005 + 0.0005;
      
      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    renderer.render(scene, camera)
  }
  else if(index == 7){
    const stars = await obj.createStars(10000, 1, 0xffffff)
    camera.name = "7"  
    scene.add(stars)

    function animate(){
      camera.rotation.x += 0.0005

      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    renderer.render(scene, camera)
  }
  else if(index == 8){
    const cone = await obj.createCone(0, 0, 0, 0.5, 0xffffff)
    camera.name = "8"  
    scene.add(cone)

    function animate(){
      cone.rotation.x += 0.005
      cone.rotation.y += Math.random() * 0.005 + 0.0005; 
      cone.rotation.z -= Math.random() * 0.005 + 0.0005; 

      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)
    renderer.render(scene, camera)
  }
  else if(index == 9){
    const circle = await obj.createCircle(0, 0, 0, 1, 0xffffff)
    circle.name = "9"  
    scene.add(circle)

    function animate(){
      circle.rotation.x += 0.005
      circle.rotation.y += Math.random() * 0.005 + 0.0005; 
      circle.rotation.z -= Math.random() * 0.005 + 0.0005; 

      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)
    renderer.render(scene, camera)
  }
}

for(let i = 1; i != 10; i++){
  items("bg" + i.toString(), i)
}

window.addEventListener("resize", async (e) => {
  e.preventDefault()
  for(let i = 1; i != 10; i++){
    items("bg" + i.toString(), i)
  }
})



