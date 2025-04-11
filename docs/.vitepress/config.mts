import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/me' }
    ],

    sidebar: [
      {
        text: '运维',
        items: [
          { text: '运维基础', link: '/运维基础' },
          { text: '系统运维工程师', link: '/系统运维工程师' },
          { text: '数据库运维工程师', link: '/数据库运维工程师' },
          { text: '自动化运维', link: '/自动化运维' },
          { text: '容器运维', link: '/容器运维' },
          { text: '云计算+云安全', link: '/云计算+云安全' },
          { text: '国产信创运维', link: '/国产信创运维' },
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '每日小结',
        items: [
          { text: 'shell 命令行的格式以及如何使用 &shell中常用的通配符& Shell的输入重定向、输出重定向与错误重定向', link: '/每日小结/0411' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/youtubhexo' }
    ]
  }
})
