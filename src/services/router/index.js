import Vue from 'vue'
import Router from 'vue-router'


const HelloWorld = () => import('@/components/HelloWorld')
const DestinationDetails = () => import('@/components/DestinationDetails')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/destinations/:id',
      name: 'destination_details',
      component: DestinationDetails,
    },
  ],
})
