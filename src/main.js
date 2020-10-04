import SiteLayout from '~/layouts/Site.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('SiteLayout', SiteLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
  })
}
