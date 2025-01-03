<template>
  <div>
    <!-- 存储区标签，添加鼠标事件以控制 info 显示 -->
    <div 
      class="storage-label" 
      @mouseenter="showInfo = true" 
      @mouseleave="showInfo = false"
      style="cursor: pointer;"
    >
      3001 存储区
    </div>


      <!-- 信息容器，根据 showInfo 的值显示或隐藏 -->
      <div 
      id="info" 
      style="height: 180px; background-color: white;"

    >
      <div class="absolute top-5 left-5 p-3 bg-white rounded shadow"
      v-show="showInfo"
      >
      <div class="flex items-center justify-center text-lg font-bold text-center mb-3">
          <img :src="warningIcon" alt="警告" class="w-8 h-8 mr-2" />
          货位：3001（整件）
        </div>
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
            <label style="color: red;">异常货位数：</label>
            <span class="text-gray-800" style="color: red;">38</span>
          </div>        
        </div>    
        <div class="flex items-center gap-5 mb-1">
          <div>
            <label>货品总金额：</label>
            <span class="text-gray-800">2000万</span>
          </div>
        </div>          
      </div>
    </div>

    <!-- 图片和按钮始终显示 -->
    <div>
    <img src="../assets/20241220-172641.jpg" usemap="#warehouseMap" alt="仓库地图" />
  </div>

    <map name="warehouseMap">
      <area shape="rect" coords="800,90,850,160" href="#/peisong" alt="配送" />
      <area shape="rect" coords="810,160,850,200" href="#/fahuo" alt="发货" />
      <area shape="rect" coords="810,220,850,260" href="#/zhengjian" alt="整件" />
      <area shape="rect" coords="810,480,860,530" href="#/shouhuo" alt="收货" />
      <area shape="rect" coords="900,160,1000,220" href="#/chailing" alt="拆零" />
      <area shape="rect" coords="1470,110,1530,160" href="#/lengcang" alt="冷库" />
    </map>

    <button 
      class="warehouse-button"
      @click="goToWarehouse"
    >
      进入3D
    </button>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import warningIcon from '@/assets/warning.png';
import warningIcon from '/src/assets/warning1.png';

const router = useRouter();
const showInfo = ref(false);

const goToWarehouse = () => {
  console.log('Button clicked');
  router.push('/warehouse');
};
</script>

<style scoped>
.relative {
  position: relative;
}

.storage-label {
  position: absolute;
  top: 480px;
  left: 620px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 24px;
  white-space: nowrap;
}

.warehouse-button {
  position: absolute;
  top: 570px;
  left: 720px;
  padding: 10px 20px;
  background-color: rgba(0, 123, 255, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.warehouse-button:hover {
  background-color: rgba(0, 123, 255, 1);
}

.mr-2 {
  margin-right: 8px; 
}

</style>