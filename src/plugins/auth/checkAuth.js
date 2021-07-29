export default (authData, roleRoutes) => {
  // console.log(authData);
  // console.log('!!!!!!!!!!!!!!!!');
  // console.log(authData);
  // console.log(roleRoutes);
  let status = false;
  // console.log(typeof roleRoutes);
  // console.log(roleRoutes instanceof Array);
  // console.log(roleRoutes.__proto__ === Array.prototype);
  // console.log(roleRoutes.__proto__ === Array.prototype);
  if (typeof roleRoutes === 'string') {
    // 如果是children里面的authKey
    // 如果authData有一个权限在路由表roleRoutes外层的authKey，即显示外层路由
    // console.log('如果是children里面的authKey');
    status = authData.includes(roleRoutes);
  } else if (roleRoutes instanceof Array) {
    // 如果不是children里面的authKey，而是路由表roleRoutes外层的authKey
    // console.log('如果不是children里面的authKey，而是外层的authKey');
    // console.log(roleRoutes);
    roleRoutes.forEach((item) => {
      // console.log(item);
      // 如果authData有一个权限在外层的authKey，即显示外层路由
      if (authData.includes(item)) {
        // console.log('wwwwwwwwwwwww');
        status = true;
      }
    });
  }
  // console.log('status');
  // console.log( roleRoutes,status);
  return status;
};
