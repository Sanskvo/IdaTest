/*
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 *
 * Copyright 2021 Sanskvo
 */

import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '@/components/MainContent'

const routes = [
  {
    path: '/:type',
    name: 'MainContent',
    component: MainContent,
    alias: '/',
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active-link',
  linkActiveClass: 'active-link'
})

export default router
