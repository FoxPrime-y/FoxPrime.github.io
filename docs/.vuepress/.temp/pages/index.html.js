import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/hero.png\",\"actionText\":\"起步 →\",\"actionLink\":\"/guide/\",\"features\":[{\"title\":\"简明优先\",\"details\":\"对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。\"},{\"title\":\"Vue 驱动\",\"details\":\"享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。\"},{\"title\":\"性能高效\",\"details\":\"VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Evan You\"},\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
