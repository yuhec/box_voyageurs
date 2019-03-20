import Vue from 'vue'
import Router from 'vue-router'


const DestinationDetails = () => import('@/components/DestinationDetails')
const Home = () => import('@/components/Home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/destinations/:id',
      name: 'destination_details',
      component: DestinationDetails,
    },
  ],
})
