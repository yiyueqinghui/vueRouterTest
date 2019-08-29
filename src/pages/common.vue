<template>
	<div>
	   <dl class="list">
	      <dd v-for="(item,key) in list" :key="key" >
	      	<router-link :to="item.url">{{item.name}}</router-link>
	      </dd>
	   </dl>
	   <router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[
				   {
				   	 url:'/common',
				   	 name:'自动滚动表格'
				   }
				]
			}
		}
	}
</script>

<style>
   .list{
   	 display: flex;
   	 justify-content:center;
   	 padding-bottom: 10px;
   	 border-bottom: 2px solid gray;
   }
   .list dd{
   	 margin:0 10px;
   }
</style>