<template>
    <div class="flex items-center justify-center h-screen relative">
        <img class="w-full h-full object-cover" src="../assets/home-page.png" usemap="#homePageMap" />
        <map name="homePageMap">
            <area
                shape="rect"
                :coords="`0,${pageHeight * 1.5 / 5},${pageWidth * 2.8 / 5},${pageHeight}`"
                href="#/index"
                class="clickable-area"
            />
        </map>
        <div class="clickable-area-cover"></div>
    </div>
</template>

<script setup lang="ts">
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
</script>

<style scoped>
.flex {
    display: flex;
}
.items-center {
    align-items: center;
}
.justify-center {
    justify-content: center;
}
.h-screen {
    height: 100vh;
}
.w-full {
    width: 100%;
}
.h-full {
    height: 100%;
}
.object-cover {
    object-fit: cover;
}

.clickable-area-cover {
    position: absolute;
    left: 0;
    top: calc(100vh * 2 / 5);
    width: calc(100vw * 3 / 5);
    height: calc(100vh * 3 / 5);
    background-color: var(--clickable-area-color);
    opacity: 0.5;
    transition: opacity 0.3s ease;
    pointer-events: none; /* 确保覆盖层不影响点击事件 */
}

.clickable-area:hover +.clickable-area-cover {
    opacity: 1;
}

/* 定义CSS变量 */
:root {
    --clickable-area-color: red;
}
</style>