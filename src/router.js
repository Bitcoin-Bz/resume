import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('./components/main.vue'),
            children:[
                {
                    path:'my',
                    name:'my',
                    component:()=>import('./components/my.vue')
                },
                {
                    path:'skill',
                    name:'skill',
                    component:()=>import('./components/skill.vue')
                },
                {
                    path:'about',
                    name:'about',
                    component:()=>import('./components/about.vue')
                },
                {
                    path:'advantage',
                    name:'advantage',
                    component:()=>import('./components/advantage.vue')
                },
                {
                    path:'contact',
                    name:'contact',
                    component:()=>import('./components/contact.vue')
                },
                
                {
                    path:'/',redirect:'/my'
                }
            ]
        },
        
    ]
})