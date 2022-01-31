import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/:companyId',
        name: 'Home',
        component: Home,
        props:(route)=>({companyId:route.params.companyId})
    },
    {
        path: '/invite',
        name: 'invite',
        component: Home,
        props:{leaveReviewPopup:true}
    },
    {
        path: '/invite/:id',
        name: 'invite',
        component: Home,
        props:(route)=>({id:route.params.id,leaveReviewPopup: true})
    },
    {
      path: '/check-in',
      name: 'check-in',
      component: Home,
      props:{checkInPopup:true}
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
