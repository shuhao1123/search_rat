import Vue from 'vue'
import Router from 'vue-router'
import Header_Item from '@/components/Header_Item'
import zhaoshuhao from '@/components/zhaoshuhao'
import Traffic_control from '@/components/Traffic_control'
import echart from '@/components/echarts'
import item_pricing from '@/components/item_pricing'
import Locate from '@/components/Locate'
import Index_Global from "@/components/index_global"
import ig_para from "@/components/ig_para"

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Index_Global //首页
        }, {
            path: '/navigation', //导航头
            name: 'Header_Item',
            component: Header_Item
        },
        {
            path: '/warn', //店铺警告
            name: 'zhaoshuhao',
            component: zhaoshuhao
        },
        {
            path: '/traffic_control', //流量把控
            name: 'Traffic_control',
            component: Traffic_control
        },
        {
            path: '/echarts', //搜索绩效
            name: 'echarts',
            component: echart
        }, {
            path: '/item_pricing', //选品定价 > 单品定价
            component: item_pricing
        }, {
            path: '/Locate', //客群定位
            component: Locate
        }, {
            path: '/ig_para', //首页传参数
            component: ig_para
        }
    ]
})