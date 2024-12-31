<template>
  <div>
    <div ref="containerRef"></div>
    <div class="absolute top-5 left-5 p-3 bg-white rounded shadow">
      <div class="text-lg font-bold text-center mb-3">货位：3001（整件）</div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>货位类型：</label>
          <span class="text-gray-800">存储位</span>
        </div>
        <div>
          <label>总货位个数：</label>
          <span class="text-gray-800">800</span>
        </div>
        <div>
          <label>空闲货位数：</label>
          <span class="text-gray-800">150</span>
        </div>        
      </div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>货位种类数：</label>
          <span class="text-gray-800">1200</span>
        </div>
        <div>
          <label>异常货位数：</label>
          <span class="text-gray-800">38</span>
        </div>        
      </div>    
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>货品总金额：</label>
          <span class="text-gray-800">2000万</span>
        </div>
       
      </div>          
    </div>
    <div class="absolute top-5 right-5 p-3 bg-white rounded shadow" v-if="showNormal">
      <div class="text-lg font-bold text-center mb-3">货位代码：30010352</div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>货品代码：</label>
          <span class="text-gray-800">15034608</span>
        </div>
        <div>
          <label>拣货规格：</label>
          <span class="text-gray-800">1*10</span>
        </div>
        <div>
          <label>单位：</label>
          <span class="text-gray-800">瓶</span>
        </div>        
      </div>
      <div class="flex items-center mb-1">
        <label>货品名称：</label>
        <span class="text-gray-800">味全每日C小青柠复合果汁</span>
      </div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>生产日期：</label>
          <span class="text-gray-800">2024-12-20</span>
        </div>
        <div>
          <label>保质期：</label>
          <span class="text-gray-800">2025-01-09</span>
        </div>
        <div>
          <label>保质期%：</label>
          <span class="text-gray-800">76.19%</span>
        </div>        
      </div> 
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>件数：</label>
          <span class="text-gray-800">20</span>
        </div>
        <div>
          <label>数量：</label>
          <span class="text-gray-800">200</span>
        </div>      
      </div>            
    </div>
    <div class="absolute top-5 right-5 p-3 bg-white rounded shadow" v-if="showYellow">
      <div class="text-lg font-bold text-center mb-3">货位代码：30010316</div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>货品代码：</label>
          <span class="text-gray-800">11070047</span>
        </div>   
      </div>
      <div class="flex items-center mb-1">
        <label>货品名称：</label>
        <span class="text-gray-800">(西班牙)奥兰小红帽半甜红葡萄酒12度</span>
      </div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>单品重量：</label>
          <span class="text-gray-800">750g</span>
        </div>
        <div>
          <label>件数：</label>
          <span class="text-gray-800">200</span>
        </div>      
      </div>   
      <div class="flex items-center gap-5 mb-1">
        <div class="text-red-700">
          <label>货位总重量：</label>
          <span class="text-red-700">900KG</span>
        </div>
        <div>
          <label>数量：</label>
          <span class="text-gray-800">1200</span>
        </div>      
      </div>     
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Raycaster,
  RepeatWrapping,
  Scene,
  TextureLoader,
  Vector2,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { onMounted, ref } from "vue";
import { addRack, changeColor, onCargoClick } from '../utils/rack'


const containerRef = ref<HTMLDivElement>();
const showNormal = ref(false);
const showYellow = ref(false)

const scene = new Scene();
const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);
camera.position.set(0, 1200, 1200);

const directionalLight = new DirectionalLight(0xffffff, 0.3);
directionalLight.color.setHSL(0.1, 1, 0.95);
directionalLight.position.set(0, 200, 0).normalize();
scene.add(directionalLight);

const ambient = new AmbientLight(0xffffff, 1);
ambient.position.set(0, 0, 0);
scene.add(ambient);



const materialTie = [];
materialTie.push(new MeshPhongMaterial({ color: 0xafc0ca }));
materialTie.push(new MeshPhongMaterial({ color: 0x9cb2d1 }));
materialTie.push(new MeshPhongMaterial({ color: 0xd6e4ec }));
materialTie.push(new MeshPhongMaterial({ color: 0xd6e4ec }));
materialTie.push(new MeshPhongMaterial({ color: 0xafc0ca }));
materialTie.push(new MeshPhongMaterial({ color: 0xafc0ca }));

new TextureLoader().load('floor.jpg', (texture) => {
  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.repeat.set(10, 10)
  const floorGeometry = new BoxGeometry(2600, 1400, 1);
  const floorMaterial = new MeshBasicMaterial({ map:texture, side:DoubleSide });
  const floor = new Mesh(floorGeometry, floorMaterial);
  floor.position.y = -0.5
  floor.rotation.x = Math.PI / 2
  scene.add(floor);
})

// const floorGeometry = new BoxGeometry(2600, 1400, 1);
// const floor = new Mesh(floorGeometry, materialTie);
// floor.position.y = -0.5;
// floor.rotation.x = Math.PI / 2;
// scene.add(floor);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x4682b4, 1);

const controls = new OrbitControls(camera, renderer.domElement);


const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

document.addEventListener("resize", onWindowResize, false);

const createCubeWall = (
  width: number,
  height: number,
  depth: number,
  angel: number,
  material: any,
  x: number,
  y: number,
  z: number
) => {
  const cubeGeometry = new BoxGeometry(width, height, depth);
  const cube = new Mesh(cubeGeometry, material);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  cube.rotation.y += angel * Math.PI;
  scene.add(cube);
};

createCubeWall(10, 100, 1400, 0, materialTie, -1300, 50, 0);
createCubeWall(10, 100, 1400, 1, materialTie, 1300, 50, 0);
createCubeWall(10, 100, 2600, 1.5, materialTie, 0, 50, -700);
createCubeWall(2600, 100, 10, 0, materialTie, 0, 50, 700);


addRack(scene, -300, 0, -500, 3)
addRack(scene, -200, 0, -500, 3)
addRack(scene, -100, 0, -500, 3)
addRack(scene, 0, 0, -500, 3)
addRack(scene, 100, 0, -500, 3)
addRack(scene, 200, 0, -500, 3)

const raycaster = new Raycaster()
const pointer = new Vector2()

const onMouseClick = (event: MouseEvent) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  intersects.forEach((intersect) => {
    if (intersect.object.name.startsWith('货品')) {
      const cargo = onCargoClick(intersect)
      if (cargo) {
        if (cargo.goods === 'green') {
          showNormal.value = true
          showYellow.value = false
        } else if (cargo.goods === 'yellow') {
          showYellow.value = true
          showNormal.value = false
        }
      }
    }
  })
}

window.addEventListener('click', onMouseClick)

const render = () => {
  renderer.render(scene, camera);
}


onMounted(() => {
  containerRef.value?.appendChild(renderer.domElement);
  renderer.setAnimationLoop(render);
  changeColor()
});
</script>
