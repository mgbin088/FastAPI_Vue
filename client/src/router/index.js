import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/layout/index'

/*
  
  hidden: true 如果设置为true 则不会显示在侧边栏中 （默认为false）
  alwaysShow: true 如果设置为true, 将始终显示根菜单， 如果不设置 alwaysShow，当项目具有多个子路由时， 它将成为嵌套模式。
  
  redirect: noRedirect 如果设置了noRedirect 则不会再导航中重定向
  name: 'router-name'  <keep alive>使用的名称（必须设置！！！）
  meta: {
    roles: ['admin'] 控制页面角色
    title: 'title' 在侧边栏和面包屑导航中显示的名称
    icon: 显示在侧边栏中的图标
    noCache:true       如果设置为true, 则不会缓存该页， 默认为false
    affix: true        如果设置为true，则标记将在 tags-view
    breadcrumb:false 将该项隐藏在面包屑导航中
    activeMenu: ''如果设置路径，侧边栏将突出显示设置的路径
 */



export const defaultRouter = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', affix: true, icon: 'dashboard'}
    }]
  },
  {
    path: "/data",
    component: Layout,
    redirect: "/data/list",
    meta: { title: "数据可视化", icon: 'chart'},
    children: [
      {
        path: "list",
        name: "BarChartAdmin",
        component: () => import('@/views/barchart/index'),
        meta: { title: "数据可视化"}
      },
      {
        path: "ll",
        name: "BarChars",
        component: () => import('@/views/barchart/index'),
        meta: { title: "数据可视化2"}
      }
    ]
  },
  {
    path: '/script',
    component: Layout,
    redirect: '/script/list',
    name: "Script",
    meta: { title: "脚本管理", icon: 'guide'},
    children: [
      {
        path: 'create',
        component: () => import('@/views/script/create'),
        name: "ScriptCreate",
        meta: { title: '创建脚本', icon: 'edit'}
      },
      {
        path: 'list',
        component: () => import('@/views/script/list'),
        name: "ScriptList",
        meta: { title: '总览', icon: 'list'}
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/script/edit'),
        name: 'ScriptEdit',
        meta: { title: '脚本编辑', noCache: true, activeMenu: '/script/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/logs',
    component: Layout,
    redirect: "/logs/list",
    name: "Logs",
    meta: { title: "日志管理", icon: "documentation"},
    children: [
      {
        path: 'list',
        component: () => import('@/views/logs/list'),
        name: "LogsList",
        meta: { title: "脚本日志", icon: "list"}
      },
      {
        path: 'request',
        component: () => import('@/views/logs/list'),
        name: "LogsRequest",
        meta: { title: "请求日志", icon: "list"}
      },
      {
        path: "message/:id(\\d+)",
        component: () => import('@/views/logs/list'),
        name: "LogsMessage",
        meta: { title: "日志详情", activeMenu: "/logs/list"},
        hidden: true
      }
    ]
  }
];

const createRoute = () => new Router({
  scrollBehavior: () => ({ y:0 }),
  routes: defaultRouter,
  // mode: "history"  //改参数用于去除url 中的 "#" 多页面不适用
});

const router = createRoute();

export function resetRouter() {
  const newRouter = createRoute();
  router.matcher = newRouter.matcher
}

export default router

