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
import NotFound404 from '@/pages/NotFound404'
import Goods from '@/pages/Phase3/Goods'
import GoodsList from '@/pages/Phase3/GoodsList'
import GoodsDetail from '@/pages/Phase3/GoodsDetail'
import Valkyrie from '@/pages/Valkyrie/Valkyrie'
import ValkyrieOverview from '@/pages/Valkyrie/Overview/Overview'
import ValkyrieSkill from '@/pages/Valkyrie/Skill/Skill'
import ValkyrieEquipPro from '@/pages/Valkyrie/EquipPro/EquipPro'
import ValkyrieTeam from '@/pages/Valkyrie/Team/Team'
import ValkyrieRaiders from '@/pages/Valkyrie/Raiders/Raiders'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
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
      path: '/valkyrie',
      name: 'Valkyrie',
      component: Valkyrie,
      children: [
        {path: 'overview', component: ValkyrieOverview},
        {path: 'skill', component: ValkyrieSkill},
        {path: 'equipPro', component: ValkyrieEquipPro},
        {path: 'team', component: ValkyrieTeam},
        {path: 'raiders', component: ValkyrieRaiders}
      ]
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
      path: '/stigmata',
      name: 'Stigmata',
      component: Stigmata,
      children: [
        // 划分圣痕列表的星级 e.g /stigmata/5 代表5星圣痕
        { path: ':star', component: StigmataList },
        // 进入不同武器详情的页面 e.g /stigmata/detail/5 代表5号圣痕的详细信息
        { path: 'detail/:id', component: StigmataDetail }
      ]
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
      children: [
        // 材料列表页，按分类，星级进行划分 e.g /goods/樱色轮回/4 代表樱色轮回中的4星材料
        { path: ':type/:star', component: GoodsList },
        // 进入不同的材料详情页面 e.g /goods/detail/1 代表1号材料的详细信息
        { path: 'detail/:id', component: GoodsDetail }
      ]
    },
    {
      path: '*',
      name: 'NotFound404',
      component: NotFound404
    }
  ]
})
