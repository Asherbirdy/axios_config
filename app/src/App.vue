<script setup lang="ts">
import useRequest from '@/hook'

const get = async () => {
  const res = await useRequest.get({
    url: '/a'
  })
  console.log('GET:', res)
}

const post = async () => {
  const res = await useRequest.post({
    url: '/b',
    data: {
      message: 'POST'
    }
  })
  console.log('POST:', res)
}

const retryGet = async () => {
  const res = await useRequest.get({
    url: '/c'
  })
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
