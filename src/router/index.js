import Vue from 'vue'
import Router from 'vue-router'
import ListName from '../views/ListName.vue'
import AddPeople from '../views/AddPeople.vue'
import SearchName from '../views/SearchName.vue'
import Me from '../views/Me.vue'
import PeopleForm from '../views/PeopleForm.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ChangePwd from '../views/ChangePwd.vue'
import OpenAddPeople from '../views/OpenAddPeople.vue'
import OpenAddVisit from '../views/OpenAddVisit.vue'

import FirstPage from '../views/FirstPage.vue'
import Success from '../views/Success.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: "/home",  // 必须登陆后，才可以访问这块
      component: Home,
      redirect:"/home/listName",
      children:[
        {
          path: '/home/listName', component: ListName  //人员列表页
        }, {
          path: '/home/addPeople', component: AddPeople  // 登陆后的登记人员页
        }, {
          path: '/home/searchName', component: SearchName // 搜索页
        }, {
          path: '/home/me', component: Me // 我的页
        },
      ],
      
    },
    {
      path: '/peopleForm', component: PeopleForm //登陆后，查看某个人员的详细信息页
    },
    {
      path: '/login', component: Login // 登陆
    },
    {
      path: '/register', component: Register  // 注册
    },
    {
      path: '/changePwd', component: ChangePwd  // 登陆后，修改密码
    },
    {
      path: '/openAddPeople', component: OpenAddPeople // 不用登陆，就可以填表的页面
    },
    {
      path: '/openAddVisit', component: OpenAddVisit  // 不用登陆，就可以填表的页面
    },
    {
      path: '/firstPage', component: FirstPage  // 不用登陆，就可以填表的页面
    },
    {
      path: '/success', component: Success // 登陆和不登录，都可以访问的页面
    }

  ]
})
