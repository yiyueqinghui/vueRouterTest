<template>
	<div id="home">
		<ul style="overflow: hidden;">
			<li class="item" v-for='(item,key) in links' :key=key >
				<router-link :to="item.url">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
		   return {
		   	 links:[
		   	    {
		   	    	url:'/cell/merge',
		   	    	name:'表格合并'
		   	    },
		   	    {
		   	    	url:'/router',
		   	    	name:'父子组件之间数据的传递'
		   	    },
		   	    {
		   	    	url:'/echarts',
		   	    	name:'echarts表格'
		   	    },
		   	    {
		   	    	url:'/map',
		   	    	name:'高德地图'
		   	    },
		   	    {
		   	    	url:'/vue',
		   	    	name:'父组件数据更新，子组件数据也同时更新'
		   	    },
		   	    {
		   	    	url:'/common',
		   	    	name:'vue常用组件'
		   	    }
		   	 ]
		   	 
		   }
		},
		methods:{
			add(){
			
			}
		},
		created(){
			this.add();
		}
	}
</script>

<style scoped>
	.item{
		float:left;
		padding:20px;
		list-style: none;
	}
	
	
</style>