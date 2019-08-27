<template>
	<div id="home">
		<ul>
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
		   	    	name:'路由'
		   	    },
		   	    {
		   	    	url:'/echarts',
		   	    	name:'echarts表格'
		   	    },
		   	    {
		   	    	url:'/map',
		   	    	name:'高德地图'
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