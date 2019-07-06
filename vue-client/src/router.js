import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})



// import Vue from 'vue';
// import Router from 'vue-router';

// Vue.use(Router);

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: () =>
//         import(/* webpackChunkName: "home" */ './views/home/Home.vue')
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: () =>
//         import(/* webpackChunkName: "about" */ './views/about/About.vue')
//     },
//     {
//       path: '/create',
//       name: 'create',
//       component: () =>
//         import(/* webpackChunkName: "create" */ './views/create/Create.vue')
//     },
//     {
//       path: '/create/:gifId',
//       name: 'create-single',
//       component: () =>
//         import(
//           /* webpackChunkName: "create-single" */ './views/create/CreateSingle.vue'
//         )
//     },
//     {
//       path: '/memes/:memeId',
//       name: 'single-meme',
//       component: () =>
//         import(
//           /* webpackChunkName: "single-meme" */ './views/memes/SingleMeme.vue'
//         )
//     },
//     {
//       path: '/memes',
//       name: 'all-memes',
//       component: () =>
//         import(/* webpackChunkName: "all-memes" */ './views/memes/AllMemes.vue')
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: () =>
//         import(/* webpackChunkName: "login" */ './views/auth/Login.vue')
//     }
//   ]
// });
