geo3js - a collection of threejs geometries like cubes and spheres and more.

You can use it so you don't have to write a lot of threejs code for every new geometry.

You have to use Vite or another web pack
initialize: 

    1. npm init vite 

    2. cd <name vite folder> && npm i geo3js

    3 then add import geo3js from 'geo3js'

you have 4 objects scene, camera, renderer and three

scene is the body canvas

camera is the view 

renderer is the webgl renderer

three is just the threejs object 

example: 

    const obj = new geo3js()
    const {scene, camera, renderer, three} = await obj.init()


arguments parameters: 
    
    (x,y,z) are the positions.
    
    size is the scale of the geometries,

    color is the color of the geometries

    amount is how many stars there are in createStars function
 
geometries examples:

    1. await obj.createBox(<x>, <y>, <z>, <size>, <color>)

    2. await obj.createSphere(<x>, <y>, <z>, <size>, <color>)
    
    3. await obj.createTorus(<x>, <y>, <z>, <size>, <color>)
    
    4. await obj.createTriangle(<x>, <y>, <z>, <size>, <color>)

    5. await obj.createPlane(<x>, <y>, <z>, <size>, <color>)

    6. await obj.createCylinder(<x>, <y>, <z>, <size>, <color>)

    7. await obj.createCone(<x>, <y>, <z>, <size>, <color>)

    8. await obj.createCircle(<x>, <y>, <z>, <size>, <color>)

    9. await obj.createStars(<amount>, <size>, <color>)