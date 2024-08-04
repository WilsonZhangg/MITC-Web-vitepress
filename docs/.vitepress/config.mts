import { defineConfig } from 'vitepress'
import ClubLeader from 'docs\.vitepress\components\ClubWorker.vue';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NCCU MITc",
  head: [
    ['link',{rel:'icon',href:'/icon.png'}],
    ['meta', { name: 'keywords', content: '數理資訊社, 政大數理資訊社, MITC, NCCU-MITC, Pyday' }],
    ['meta', { name: 'description', content: '政大數理資訊社官網' }],
    ['meta', { name: 'google-site-verification', content:'xwL8a9NV2cxXJFvIs7jO-r717PzvMiHIjCJAl6VB7cg'} ]
  ],
  description: "A Good Site",

  base: '/MITC-Web-vitepress/',

  themeConfig: {
    //siteTitle: false,
    logo:'/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '關於我們', link: '/about-us/' },
      { text: '幹部名單', link: '/workerlist/'},
      { text: '社課與專案', link:'/plan/'},
      { text: '教學教材', link:'/teach'},
      { text: 'Blog', link:'/blog' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NCCU-MITC/MITC-Web-vitepress' },
      { icon: 'facebook', link: 'https://www.facebook.com/nccumit'},
      { icon: 'discord', link: 'https://discord.gg/hNZEAAaw7W'},
      { icon: 'instagram', link:'https://www.instagram.com/nccu_mitc/'},
    ],
    footer:{
      message:'聯絡我們: <a href="nccumitc@gmail.com">nccumitc@gmail.com</a> ',
      //copyright:'AAAAA'

    }
  }
})