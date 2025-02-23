import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    // Legal pages
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/legal/Privacy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/legal/Terms.vue')
    },
    {
      path: '/license',
      name: 'license',
      component: () => import('../views/legal/License.vue')
    },
    {
      path: '/refund-policy',
      name: 'refund-policy',
      component: () => import('../views/legal/RefundPolicy.vue')
    },
    // Support pages
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/support/Contact.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/support/FAQ.vue')
    },
    // Template pages
    {
      path: '/templates',
      name: 'templates',
      component: () => import('../views/templates/TemplateGallery.vue')
    },
    {
      path: '/templates/:category',
      name: 'template-category',
      component: () => import('../views/templates/TemplateCategory.vue')
    },
    // Documentation pages
    {
      path: '/docs',
      name: 'documentation',
      component: () => import('../views/docs/Documentation.vue')
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: () => import('../views/docs/Tutorials.vue')
    },
    // Company pages
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/company/About.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/company/Blog.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/company/Partners.vue')
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('../views/company/Careers.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router 