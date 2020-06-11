
export default {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  
  roles: state => state.userInfo.roles,
  permission_routes: state => state.permission.routes,
  
  userToken: state => state.userInfo.token,
}