<script setup lang="ts">
import useRequest from '@/server/http/index'

const get = () => {
  useRequest.get({
    url: '/a'
  }).then((res) => console.log('GET:', res))
}

const post = () => {
  useRequest.post({
    url: '/b',
    data: {
      message: 'POST'
    }
  }).then((data) => console.log('POST:', data))
}

const retryGet = () => {
  useRequest.get({
    url: '/c'
  }).then((res) => console.log('GET:', res)).catch(err => {
    console.log('Err', err)
  })
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
