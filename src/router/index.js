import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index'
import CellMerge from '@/pages/cellMerge'
import Parent from '@/pages/parent'
import EchartDemo from '@/pages/echarts'
import GdMap from '@/pages/gdmap'
import Talk from '@/pages/componentTalk'
import Common from '@/pages/common'
import ArcGis from '@/pages/arcgis'
import FirstSon from '@/components/son1'
import SecondSon from '@/components/son2'
import RollTab from '@/components/rollTab'


Vue.use(Router)

export default new Router({
  routes: [
	  {
	  	path:'/',
	  	component:Home
	  },
	  {
	  	path:'/cell/merge',
	  	component:CellMerge
	  },
    {
      path: '/router',
      component:Parent,
      children:[
        {
          path:'',
          redirect:'first'
        },
        {
          path:'first',
          component:FirstSon
        },
        {
          path:'second',
          component:SecondSon
        }
      ]
    },
    {
    	path:'/echarts',
    	component:EchartDemo
    },
    {
    	path:'/map',
    	component:GdMap
    },
    {
    	path:'/vue',
    	component:Talk
    },
    {
    	path:'/common',
    	component:Common,
    	children:[
    	  {
    	  	path:'',
    	  	component:RollTab
    	  }
    	]
    },
    {
    	path:'/arcgis',
    	component:ArcGis
    }
  ]
})
