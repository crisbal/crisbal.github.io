import SiteLayout from '~/layouts/Site.vue'
import VueGtag from 'vue-gtag';

export default function (Vue, { router, head }) {
  Vue.component('SiteLayout', SiteLayout)

  head.htmlAttrs.lang = 'en'
  // Remove "generator" meta tag
  const generatorIndex = head.meta.findIndex(e => e.name === 'generator')
  if (generatorIndex !== -1) head.meta.splice(generatorIndex, 1)


  head.link.push({
    href: 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css',
    rel: 'stylesheet',
    body: true,
  })

  head.link.push({
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
    rel: 'stylesheet',
    body: true,
  })

  Vue.use(VueGtag, {
    config: { id: 'G-8W675275W1' }
  }, router);
}
