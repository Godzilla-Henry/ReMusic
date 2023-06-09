/**
 * 全域共用資料
 */

import { defineStore } from 'pinia'
import { type RouteLocationMatched, type RouteMeta } from 'vue-router';

/** Config State */
interface IConfigState {
    drawer: boolean;
}

export default defineStore(
    'global', 
    {
        state: (): IConfigState => ({
             // 折疊 SideBar
            drawer: true,
        }),
        getters: {
            getDrawer: (state): boolean => state.drawer,
        },
        actions: {
            // 控制折疊
            act_toggleDrawer(): void{
                this.drawer = !this.drawer;
            },
            act_setDrawer(data: boolean){
                this.drawer = data;
            },
        },
        // Data persistence destination
        // persist: {
        //     key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE ?? 'vuetify',
        //     storage: window.sessionStorage,
        // },
    }
)
