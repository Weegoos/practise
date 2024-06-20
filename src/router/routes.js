const routes = [
  {
    path: '/',
    component: () => import('pages/Main.vue'),
  },
  {
    path: '/hooks',
    component: () => import('pages/Hooks.vue')
  },
  {
    path: '/props',
    component: () => import('pages/Props.vue')
  },
  {
    path: '/emits',
    component: () => import('pages/Emits.vue')
  },
  {
    path: '/components',
    component: () => import('pages/Components.vue')
  },
  {
    path: '/links',
    component: () => import('../pages/Links.vue')
  },
  {
    path: '/settings',
    component: () => import('pages/Settings.vue'),
    children: [
      {
        path: 'language',
        component: () => import('components/LanguageSettings.vue')
      },
      {
        path: 'style',
        component: () => import('components/Style.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
