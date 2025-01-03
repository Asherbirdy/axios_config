import Axios from "./axios/Axios"
import staticAxiosConfig from './config'
import _RequstInterceptors from './axios/requestInterceptors'

const useRequest = new Axios({
  directlyGetData: true, // 是否直接返回 data 數據
  baseURL: staticAxiosConfig.baseUrl, // 定義攔截器
  timeout: 3000, // 
  interceptors: _RequstInterceptors, // 定義攔截器
  abortRepetitiveRequest: true, // 是否取消重複請求
  retryConfig: {
    count: 5, // 重連次
    waitTime: 500 // 每次重複請求間隔時間
  }
})

export default useRequest
