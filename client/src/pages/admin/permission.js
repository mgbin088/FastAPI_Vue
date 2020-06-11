import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import { getToken } from "@utils/auth";
import getPageTitle from "@utils/get-page-title"

NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/auth-redirect'];

router.beforeEach(async (to, from, next) => {
  
  NProgress.start();
  
  document.title = getPageTitle(to.meta.title);
  
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {

        next()
      } else {
        try {
          const { roles } = await store.dispatch('userInfo/getInfo');
          
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles);
          router.addRoutes(accessRoutes);

          next({...to, replace: true})
        } catch (e) {
          // await store.dispatch('userInfo/resetToken');
          Message.error(e);
          next(`/login?redirect=${to.path}`);
          NProgress.done()
        }
      }
    }
  } else {

    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`login?redirect=${to.path}`);
      NProgress.done()
    }
  }
});


router.afterEach(() => {
  NProgress.done()
});