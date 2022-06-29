import { ElLoading } from 'element-plus'

const looding = {
  loadingInstance: null,

  // 打开
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        background: 'rgba(122, 122, 122, 0.8)'
      })
    }
  },

  // 关闭
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export default looding
