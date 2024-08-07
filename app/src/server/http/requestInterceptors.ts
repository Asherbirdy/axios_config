// requestInterceptors.ts
import { RequstInterceptors } from './type'
import type { AxiosError } from 'axios'
import axios from 'axios'
import { retry } from './axiosRetry'
import { handleErrorStatus } from './handleErrorStatus'

// ** 繼承了我們在最開始實現的抽象類RequestInterceptors，主要關心responseInterceptorsCatch內容
const _RequstInterceptors: RequstInterceptors = {
  requestInterceptors(config) { return config },
  requestInterceptorsCatch(err) { return err },
  responseInterceptor(config) { return config },
  responseInterceptorsCatch(axiosInstance, err: AxiosError) {
    let message = err.code === 'ECONNABORTED' ? '請求超時' : undefined

    // 判斷本次請求是否已經被取消
    if (axios.isCancel(err)) {
      return Promise.reject(err)
    }
    console.log(err)

     // 檢查各種 http status
    handleErrorStatus((err as AxiosError).response?.status, message, (message) => console.log(message))

     // 響應錯誤 實現 重連功能
    return retry(axiosInstance, err as AxiosError)
  },
}

export default _RequstInterceptors
