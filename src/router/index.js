import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Guide from '@/components/Guide';
import Catalog from '@/components/Catalog';
// import MainForm from '@/components/catalog/board/form/Form';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/catalog',
      name: 'сatalog',
      component: Catalog,
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide,
    },
    // {
    //   path: '/create',
    //   name: 'create-form',
    //   component: MainForm,
    // },
    // {
    //   path: '/edit/:id',
    //   name: 'edit-form',
    //   component: MainForm,
    // },
  ],
});
