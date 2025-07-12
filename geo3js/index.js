import * as THREE from 'three'

export default class geo3js{
    async init(){
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x000)

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(0, 0, 30)
        
        const renderer = new THREE.WebGLRenderer()
        document.body.appendChild(renderer.domElement)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera)

        return {"scene": scene, "camera": camera, "renderer": renderer, "three": THREE}
    }
    async createBox(x, y, z, size, color){
        const geometry = new THREE.BoxGeometry(10, 10, 10)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)

        return mesh
    }
    async createSphere(x, y, z, size, color){
        const geometry = new THREE.SphereGeometry(1, 64)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)
        
        return mesh
    }
    async createTriangle(x, y, z, size, color){
        const geometry = new THREE.TetrahedronGeometry(10, 0)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)

        return mesh
    }
    async createTorus(x, y, z, size, color){
        const geometry = new THREE.TorusGeometry(10, 5)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)

        return mesh
    }
    async createPlane(x, y, z, size, color){
        const geometry = new THREE.PlaneGeometry(10, 10)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)

        return mesh
    }
    async createCylinder(x, y, z, size, color){
        const geometry = new THREE.CylinderGeometry(10, 10, 20)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)

        return mesh
    }
    async createCone(x, y, z, size, color){
        const geometry = new THREE.ConeGeometry(10, 20)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)

        return mesh
    }
    async createCircle(x, y, z, size, color){
        const geometry = new THREE.CircleGeometry(10)
        const material = new THREE.MeshBasicMaterial({
            color: color, 
            side: THREE.DoubleSide, 
            wireframe: true
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(x, y, z)
        mesh.scale.set(size, size, size)

        return mesh
    }
    async createStars(amount, size, color){
        const vertices = []
        for(let i = 0; i != amount; i++){
            const x = THREE.MathUtils.randFloatSpread(2000); 
            const y = THREE.MathUtils.randFloatSpread(2000); 
            const z = THREE.MathUtils.randFloatSpread(2000); 

            vertices.push(x, y, z)
        }
        const stargeometry = new THREE.BufferGeometry()
        stargeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))

        const starmaterial = new THREE.PointsMaterial({
            color: color, 
            side: size
        })
        const stars = new THREE.Points(stargeometry, starmaterial)
        return stars
    }
}