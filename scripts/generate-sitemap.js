const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const { join } = require('path')
const glob = require('glob')

// 创建一个sitemap的流
const stream = new SitemapStream({ hostname: 'https://nccu-mitc.github.io/MITC-Web-vitepress/' })

// 创建一个写入流，将sitemap写入到sitemap.xml文件
const writeStream = createWriteStream(join(__dirname, '..', 'docs', '.vitepress', 'dist', 'sitemap.xml'))
// 将sitemap的流连接到写入流
stream.pipe(writeStream)

// 获取你的项目中所有的.md文件
const files = glob.sync('docs/**/*.md')

// 将每个文件添加到sitemap中
files.forEach(file => {
  const url = '/' + file.replace('docs/', '').replace('.md', '.html')
  stream.write({ url, changefreq: 'weekly' })
})

// 结束sitemap的流
stream.end()

// 等待sitemap的流结束，然后打印一个消息
streamToPromise(stream).then(() => console.log('Sitemap created successfully'))