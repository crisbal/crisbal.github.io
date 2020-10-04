module.exports = {
  siteName: 'Cristian Baldi',
  siteUrl: "https://www.baldi.me",
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'src/content/posts/**/*.md',
      },
    },
  ],
  templates: {
    Post: '/posts/:year/:month/:day/:title',
  }
}
