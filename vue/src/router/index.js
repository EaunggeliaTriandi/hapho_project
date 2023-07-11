import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../front_page/Dashboard.vue";
import Admin_Login from "../views/Admin_Login.vue";
import Photo_Page from "../views/Photo_Page.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Customer_DashboardLayout from "../components/Customer_DashboardLayout.vue";
import Admin_PageLayout from  "../components/Admin_PageLayout.vue";
import Customer_Dashboard from "../views/Customer_Dashboard.vue";
import About_Us from "../front_page/About_Us.vue";
import Contact_Us from "../front_page/Contact_Us.vue";
import Our_Member from "../front_page/Our_Member.vue";
import Our_Service from "../front_page/Our_Service.vue";
import Admin_Dashboard from "../admin_page/Admin_Dashboard.vue";
import Admin_Bonus_Progress from "../admin_page/Admin_Bonus_Progress.vue";
import Admin_Upload_Project from "../admin_page/Admin_Upload_Project.vue";
import Admin_Event_Calendar from "../admin_page/Admin_Event_Calendar.vue";
import store from "../store/index.js";
import AuthLayout from '../components/AuthLayout.vue';

const routes = [
  {
    path : '/',
    redirect: '/dashboard',
    name : 'Dashboard',
    component: DefaultLayout,
    children: [
      {path: '/dashboard', name: 'Dashboard', component: Dashboard},
      {path: '/about_us', name: 'About_Us', component: About_Us},
      {path: '/contact_us', name: 'Contact_Us', component: Contact_Us},
      {path: '/our_member', name: 'Our_Member', component: Our_Member},
      {path: '/our_service', name: 'Our_Service', component: Our_Service}
    ]
  },
  /*admin login*/
  {
    path: '/auth',
    redirect: '/admin_login',
    name: 'Auth',
    component: AuthLayout,
    meta : {isGuest : true},
    children: [
      {
        path : '/admin_login',
        name : 'Admin_Login',
        component: Admin_Login
      }
    ]
  },
  {
    path : '/',
    redirect: '/admin_dashboard',
    name : 'Admin_PageLayout',
    component: Admin_PageLayout,
    meta: {requiresAuth: true},
    children: [
      {path: '/admin_dashboard', name: 'Admin_Dashboard', component: Admin_Dashboard},
      {path: '/admin_bonus_progress', name: 'Admin_Bonus_Progress', component: Admin_Bonus_Progress},
      {path: '/admin_upload_project', name: 'Admin_Upload_Project', component: Admin_Upload_Project},
      {path: '/admin_event_calendar', name: 'Admin_Event_Calendar', component: Admin_Event_Calendar}
    ]
  },

/*  Customer Login*/
  {
    path : '/photo_page',
    name : 'Photo_Page',
    component: Photo_Page
  },
  {
    path : '/customer_dashboard',
    redirect: '/customer_dashboard',
    name : 'Customer_Dashboard',
    component: Customer_DashboardLayout,
    children: [
    {path: '/customer_dashboard', name: 'Customer_Dashboard', component: Customer_Dashboard}
    ]
  }

];


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.meta.requiresAuth && !store.state.admin.token)
  {
    next({name: 'Admin_Login'})
  }
  else if(store.state.admin.token && (to.meta.isGuest)){
    next({name: 'Admin_Dashboard'});
  }
  else{
    next();
  }
})
export default router;
