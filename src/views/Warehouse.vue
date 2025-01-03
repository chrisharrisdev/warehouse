<template>
  <div>
    <div ref="containerRef"></div>
    <!-- <div class="absolute top-5 left-5 p-3 bg-white rounded shadow">
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
    </div> -->
    <div class="absolute top-5 right-5 p-3 bg-white rounded shadow" v-if="show">
      <div class="text-lg font-bold text-center mb-3">货位代码：{{ gd.binCode }}</div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>货品代码：</label>
          <span>{{ gd.goodsCode }}</span>
        </div>
        <div>
          <label>拣货规格：</label>
          <span>1*10</span>
        </div>
        <div>
          <label>单位：</label>
          <span>{{ gd.unit }}</span>
        </div>        
      </div>
      <div class="flex items-center mb-1">
        <label>货品名称：</label>
        <span>{{gd.goodsName}}</span>
      </div>
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>生产日期：</label>
          <span>{{ gd.productDate }}</span>
        </div>
        <div :class="{'text-red-600': showRed}">
          <label>保质期：</label>
          <span>{{ gd.expireDate }}</span>
        </div>
        <div>
          <label>保质期%：</label>
          <span>{{ gd.expirePercent }}</span>
        </div>        
      </div> 
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>批次号：</label>
          <span>{{ gd.lotNo }}</span>
        </div>
        <div>
          <label>高低库存：</label>
          <span class="border p-1 border-gray-400 w-10 inline-block rounded text-center mr-2">20</span>
          <span class="border p-1 border-gray-400 w-10 inline-block rounded text-center">5</span>
        </div>
     
      </div>      
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>货主：</label>
          <span>{{ gd.owner }}</span>
        </div>
        <div :class="{'text-red-600': showYellow}">
          <label>货位总重量：</label>
          <span>{{ gd.binWeight }}</span>
        </div>
     
      </div>         
      <div class="flex items-center gap-5 mb-1">
        <div>
          <label>件数：</label>
          <span>{{ gd.qtyStr }}</span>
        </div>
        <div>
          <label>数量：</label>
          <span>{{ gd.qty }}</span>
        </div>      
      </div>            
    </div>
    <div class="absolute bottom-5 right-5 bg-white shadow rounded p-3 flex">
      <div class="flex items-center mr-3 gap-2">
        <div class="w-10 h-3 bg-green-600"></div>
        <span>正常</span>
      </div>
      <div class="flex items-center mr-3 gap-2">
        <div class="w-10 h-3 bg-red-600"></div>
        <span>超期</span>
      </div>
      <div class="flex items-center mr-3 gap-2">
        <div class="w-10 h-3 bg-yellow-600"></div>
        <span>超重</span>
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
const show = ref(false);
const showYellow = ref(false)
const showRed = ref(false)
const gd = ref(null)

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
  
  if (intersects[0].object.name.startsWith('货品')) {
    const cargo = onCargoClick(intersects[0])
    if (cargo) {
      show.value = true
      gd.value = cargo.gd
      if (cargo.goods === 'red') {
        showRed.value = true
        showYellow.value = false
      } else if (cargo.goods === 'yellow') {
        showYellow.value = true
        showRed.value = false
      } else {
        showRed.value = false
        showYellow.value = false
      }
    }
  } else {
    show.value = false
  }

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
