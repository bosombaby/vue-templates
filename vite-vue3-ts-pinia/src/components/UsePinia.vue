<template>
    <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
    <div>{{ userStore.name }}</div>
</template>

<script setup lang="ts">
// 导入pinia数据
import { useUserStore } from '@/store';

const userStore = useUserStore();
userStore.updateName('李四');
</script>

<style scoped></style>
