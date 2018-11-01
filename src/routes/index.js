/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
    // Home
    {
        path: '/',
        name: 'home.index',
        component: () => import('@/views/Home/Index.vue'),

        // If the user needs to be authenticated to view this page
        meta: {
            auth: false,
        },
    },
    {
        path: '/view/:id',
        name: 'home.view',
        component: () => import('@/views/Home/Product.vue'),
        // If the user needs to be authenticated to view this page
        meta: {
            auth: false,
        },
    },
    {
        path: '/cart',
        name: 'home.cart',
        component: () => import('@/views/Home/Cart.vue'),
        // If the user needs to be authenticated to view this page
        meta: {
            auth: false,
        },
    },

    // Account
    {
        path: '/account',
        name: 'account.index',
        component: () => import('@/views/Account/Index.vue'),

        // If the user needs to be authenticated to view this page.
        meta: {
            auth: true,
        },
    },

    // Admin
    {
        path: '/admin',
        component: () => import('@/views/Admin/Index.vue'),
        children: [
            {
                path: 'orders',
                name: 'admin.orders',
                component: () => import('@/views/Admin/AllOrders.vue'),
            },
            {
                path: 'create',
                name: 'admin.createStoreItem',
                component: () => import('@/views/Admin/NewStoreItem.vue'),
            },
            {
                  path: 'products',
                  name: 'admin.products',
                  component: () => import('@/views/Admin/AllProducts.vue'),
            },
        ],
        // If the user needs to be authenticated to view this page.
        meta: {
            auth: false,
        },
    },

    // Login
    {
        path: '/login',
        name: 'login.index',
        component: () => import('@/views/Login/Index.vue'),

        // If the user needs to be a guest to view this page.
        meta: {
            guest: true,
        },
    },

    // Register
    {
        path: '/register',
        name: 'register.index',
        component: () => import('@/views/Register/Index.vue'),

        // If the user needs to be a guest to view this page.
        meta: {
            guest: true,
        },
    },

    {
        path: '/',
        redirect: '/home',
    },

    {
        path: '/*',
        redirect: '/home',
    },
];
