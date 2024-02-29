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

const errorGet404 = () => {
  useRequest.get({
    url: '/aaaaaaaaaaaaaaaaaaa'
  })
  .then((res) => console.log('GET:', res))
  .catch(err => console.log(err))
}

const errorGet500 = () => {
  useRequest.post({
    url: '/d'
  })
  .then((res) => console.log('GET:', res))
  .catch(err => console.log(err))
}

const errorGet400 = () => {
  useRequest.post({
    url: '/e'
  })
  .then((res) => console.log('GET:', res))
  .catch(err => console.log(err))
}
</script>

<template>
  <div class="app">
    <button @click="get">Get請求</button>
    <button @click="post">post請求</button>
    <button @click="retryGet">超時重複GET請求</button>
    <button @click="errorGet404">錯誤請求404</button>
    <button @click="errorGet400">錯誤請求400</button>
    <button @click="errorGet500">錯誤請求40</button>
  </div>
</template>

<style scoped>
.app {
  button {
    margin: 0 5px;
  }
}
</style>
