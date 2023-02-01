import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import progress from '../tools/config/progress'

const router = createRouter({
    history: createWebHashHistory(), /* 无# createWebHistory() */
    routes
})

router.beforeEach(() => {
    progress.start()
})

router.afterEach(() => {
    progress.close()
})
export default router
