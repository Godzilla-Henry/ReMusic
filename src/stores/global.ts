/**
 * 全域共用資料
 */

import { defineStore } from 'pinia'

/** Config State */
interface IConfigState {
    //- 折疊 SideBar
    drawer: boolean,
    //- 開啟 PlayerView
    expand: boolean,
}

export default defineStore(
    'global', 
    {
        state: (): IConfigState => ({
            drawer: true,
            expand: false,
        }),
        getters: {
            getDrawer: (state): boolean => state.drawer,
            getExpand: (state): boolean => state.expand,
        },
        actions: {
            // drawer
            act_toggleDrawer(): void{
                this.drawer = !this.drawer;
            },
            act_setDrawer(data: boolean){
                this.drawer = data;
            },
            // expand
            act_toggleExpand(): void{
                this.expand = !this.expand;
            },

        },
        // Data persistence destination
        // persist: {
        //     key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE ?? 'vuetify',
        //     storage: window.sessionStorage,
        // },
    }
)
