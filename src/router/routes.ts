
const routes:AppCustomRouteRaw[] = [
    {
        path: '/',
        name: 'Root',
        component: () => import('@/layout/index.vue'),
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('@/views/index/index.vue'),
            }
        ]
    }
]

export default routes