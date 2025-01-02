<template>
  <div class="flex items-center justify-center relative">
    <img src="../assets/20241220-172641.jpg" usemap="#warehouseMap" alt="仓库地图" />
    
    <!-- 其他区域的 area 标签保持不变 -->
    <map name="warehouseMap">
      <area shape="rect" coords="800,90,850,160" href="#/peisong" alt="配送" />
      <area shape="rect" coords="810,160,850,200" href="#/fahuo" alt="发货" />
      <area shape="rect" coords="810,220,850,260" href="#/zhengjian" alt="证件" />
      <area shape="rect" coords="810,480,860,530" href="#/shouhuo" alt="收货" />
      <area shape="rect" coords="900,160,1000,220" href="#/chailing" alt="拆零" />
      <area shape="rect" coords="1470,110,1530,160" href="#/lengcang" alt="冷库" />
    </map>
    
    <!-- 添加存储区文本 -->
    <div class="storage-label">
      3001 存储区
    </div>
    
    <!-- 添加按钮并定位到仓库区域 -->
    <button 
      class="warehouse-button"
      @click="goToWarehouse"
    >
      进入3D
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToWarehouse = () => {
  router.push('/warehouse');
};
</script>

<style scoped>
.relative {
  position: relative;
}

.storage-label {
  position: absolute;
  top: 300px; /* 根据需要调整，使文本位于按钮上方 */
  left: 620px; /* 与按钮的左边缘对齐 */
  background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 24px;
  white-space: nowrap; /* 防止文本换行 */
}

.warehouse-button {
  position: absolute;
  top: 390px; /* 根据原 area 的 y 坐标调整 */
  left: 720px; /* 根据原 area 的 x 坐标调整 */
  padding: 10px 20px;
  background-color: rgba(0, 123, 255, 0.7); /* 半透明背景 */
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
</style>