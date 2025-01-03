import { BoxGeometry, Mesh, MeshLambertMaterial, TextureLoader, Scene, MeshPhongMaterial, Object3DEventMap, Intersection, Object3D } from "three";
import { goods, redGoods, yellowGoods } from './data'
const texture = new TextureLoader().load('rack.png')
const boxTexture = new TextureLoader().load('box.png')
const rackMat = new MeshLambertMaterial({map: texture})
const rackMat2 = new MeshPhongMaterial({color:0x1C86EE})
const boxMat = new MeshLambertMaterial({map: boxTexture})
const redMat = new MeshPhongMaterial({color:0xff0000})
const greenMat = new MeshPhongMaterial({color:0x008000})
const yellowMat = new MeshPhongMaterial({color:0xffff00})
const planeX = 24
const planeY = 2
const planeZ = 28
const planeNum = 30

const holderX = 2
const holderY = 25
const holderZ = 2

const boxSize = 16

const boxList: any[] = []
let binIndex = 0
let goodsIndex = 0

export function addRack(scene: Scene, x: number, y: number, z: number, stack: number) {
  for (let i = 0; i < stack; i++) {
    addOneRack(scene, x, y + holderY * i, z)
  }

}

function addOneRack(scene: Scene, x: number, y: number, z: number) {
  const plane = new BoxGeometry(planeX, planeY, planeZ)
  const holder = new BoxGeometry(holderX, holderY, holderZ)
  // const holderMesh1 = new Mesh(holder, rackMat2)
  // const holderMesh2 = new Mesh(holder, rackMat2)
  const holderMesh3 = new Mesh(holder, rackMat2)
  const holderMesh4 = new Mesh(holder, rackMat2)
  // holderMesh1.position.set(x - planeX/2 + holderX/2, y + holderY/2, z - planeZ / 2 + holderZ / 2)
  // holderMesh2.position.set(x + planeX/2 - holderX/2, y+ holderY/2, z - planeZ / 2 + holderZ / 2)
  holderMesh3.position.set(x - planeX/2 + holderX/2, y+ holderY/2, z + planeZ / 2 * (planeNum*2-1) - holderZ / 2)
  holderMesh4.position.set(x + planeX/2 - holderX/2, y+ holderY/2, z + planeZ / 2 * (planeNum*2-1) - holderZ / 2)
  // scene.add(holderMesh1)
  // scene.add(holderMesh2)
  scene.add(holderMesh3)
  scene.add(holderMesh4)
  for (let i = 0; i < planeNum; i++) {
    const planMesh = new Mesh(plane, rackMat)
    planMesh.position.set(x, y + holderY + planeY/2, z + i * planeZ)
    planMesh.name = '货位' + binIndex++
    scene.add(planMesh)
    if (i % 2 == 0) {
      
      const holderMesh5 = new Mesh(holder, rackMat2)
      const holderMesh6 = new Mesh(holder, rackMat2)
      holderMesh5.position.set(x - planeX/2 + holderX/2, y+ holderY/2, z + planeZ / 2 * (i*2-1) + holderZ / 2)
      holderMesh6.position.set(x + planeX/2 - holderX/2, y+ holderY/2, z + planeZ / 2 * (i*2-1) + holderZ / 2)
      scene.add(holderMesh5)
      scene.add(holderMesh6)
    }
    if (Math.random() < 0.8) {
      addCargo(scene, x, y + holderY + planeY/2 + boxSize/2, z + i * planeZ)
    }
  }
}

function addCargo(scene: Scene, x: number, y: number, z: number) {
  const box = new BoxGeometry(boxSize, boxSize, boxSize)
  const boxMesh = new Mesh(box, boxMat)
  boxMesh.position.set(x, y, z)
  boxMesh.name = '货品' + goodsIndex++
  scene.add(boxMesh)
  boxList.push(boxMesh)
}

export function changeColor() {
  for (let i = 0; i < boxList.length; i++) {
    if (Math.random() <= 0.9) {
      boxList[i].material = greenMat
      boxList[i].goods = 'green'
    } else if (Math.random() <= 0.91) {
      boxList[i].material = yellowMat
      boxList[i].goods = 'yellow'
    } else {
      boxList[i].material = redMat
      boxList[i].goods = 'red'
    }
  }
}

export function onCargoClick(intersect: Intersection<Object3D<Object3DEventMap>>) {
  const cargo = boxList.find((item) => item.name == intersect.object.name)
  if (cargo.goods) {
    if (cargo.goods === 'red') {
      const idx = Math.floor((Math.random() * redGoods.length))
      cargo.gd = redGoods[idx]
    }
    if (cargo.goods === 'green') {
      const idx = Math.floor((Math.random() * goods.length))
      cargo.gd = goods[idx]
    }   
    if (cargo.goods === 'yellow') {
      const idx = Math.floor((Math.random() * yellowGoods.length))
      cargo.gd = yellowGoods[idx]
    }   
    return cargo
  }
}