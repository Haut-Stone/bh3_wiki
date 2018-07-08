import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexTest from '@/pages/IndexTest'
import Weapon from '@/pages/Weapon/Weapon'
import WeaponList from '@/pages/Weapon/WeaponList'
import WeaponDetail from '@/pages/Weapon/WeaponDetail'
import Stigmata from '@/pages/Stigmata/Stigmata'
import StigmataList from '@/pages/Stigmata/StigmataList'
import StigmataDetail from '@/pages/Stigmata/StigmataDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexTest',
      component: IndexTest
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/weapon',
      name: 'Weapon',
      component: Weapon,
      children: [
        // 划分武器列表的星级 e.g /weapon/5 代表5星武器
        { path: ':star', component: WeaponList },
        // 进入不同武器详情的页面 e.g /weapon/detail/5 代表5号武器的详细信息
        { path: 'detail/:id', component: WeaponDetail }
      ]
    },
    {
      path: '/sitgmata',
      name: 'Stigmata',
      component: Stigmata,
      children: [
        // 划分圣痕列表的星级 e.g /stigmata/5 代表5星圣痕
        { path: ':star', component: StigmataList },
        // 进入不同武器详情的页面 e.g /stigmata/detail/5 代表5号圣痕的详细信息
        { path: 'detail/:id', component: StigmataDetail }
      ]
    }
  ]
})
