<script setup lang="ts">
import { useDataApi } from '@/hook/apis/useDataApi'

const get = async () => {
  const res = await useDataApi.get()
  console.log('GET:', res)
}

const post = async () => {
  const res = await useDataApi.post()
  console.log('POST:', res)
}

const retryGet = async () => {
  const res = await useDataApi.retryGet()
  console.log('GET:', res)
}
</script>

<template>
  <div class="app">
    <button @click="get">Get請求</button>
    <button @click="post">post請求</button>
    <button @click="retryGet">重複GET請求</button>
  </div>
</template>

<style scoped>
.app {
  button {
    margin: 0 5px;
  }
}
</style>
