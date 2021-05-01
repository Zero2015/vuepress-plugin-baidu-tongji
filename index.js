const path = require('path')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-baidu-tongji',
    define() {
      const { siteConfig = {} } = ctx
      const ga = options.hm || siteConfig.hm
      const HM_ID = ga || false
      return { HM_ID }
    },
    enhanceAppFiles: path.join(__dirname, 'inject.js')
  }
}