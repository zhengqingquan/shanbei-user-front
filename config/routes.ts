export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './user/Register',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/user-manage',
        name: '用户管理',
        icon: 'smile',
        component: './Admin/UserManage',
      },
      {
        path: '/admin/dept-manage',
        name: '部门管理',
        icon: 'smile',
        component: './Admin/DeptManage',
      },
      {
        path: '/admin/role-manage',
        name: '角色管理',
        icon: 'smile',
        component: './Admin/RoleManage',
      },
      {
        path: '/admin/post-manage',
        name: '岗位管理',
        icon: 'smile',
        component: './Admin/PostManage',
      },
      {
        path: '/admin/log/operlog',
        name: '操作日志',
        icon: 'smile',
        component: './Admin/LogManage/OperLogManage',
      },
      {
        path: '/admin/log/logininfor',
        name: '登录日志',
        icon: 'smile',
        component: './Admin/LogManage/LoginLogManage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '查询表格',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '空白页面',
    icon: 'smile',
    path: '/gobang',
    component: './Gobang',
  },
  {
    name: '网站',
    icon: 'smile',
    path: '/website',
    component: './Website',
  },
  {
    component: './404',
  },
];
