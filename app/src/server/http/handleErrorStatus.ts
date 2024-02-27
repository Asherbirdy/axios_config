export function handleErrorStatus(status: number | undefined, message: string | undefined, callback: (errorMessage: string)=> any) {
  let errorMessage = message ?? ''
  switch (status) {
    case 400:
      errorMessage = '客戶端錯誤，請求格式或參數有誤！'
      break
    case 401:
      errorMessage = '身份認證未通過'
      break
    case 403:
      errorMessage = '用戶已獲得授權，但訪問被禁止！'
      break
    case 404:
      errorMessage = '未找到目標資源！'
      break
    case 500:
      errorMessage = '伺服器錯誤！'
      break
    case 503:
      errorMessage = '服務器錯誤！'
      break
  }
  if (errorMessage.length > 0) {
    callback(`checkErrorStatus: ${errorMessage}`)
  }
}
