export default {
  install (Vue, options) {
    const M = window.M
    Vue.prototype.$message = function (html) {
      M.toast({ html })
    }

    Vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошибка]: ${html}` })
    }
  }
}
