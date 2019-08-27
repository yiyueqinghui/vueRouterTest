<template>
	<div id="container">
       <dl class='navs'>
          <dd v-for="(item,key) in all_echarts" :key="key" @click="change_component(item)">
          	{{item}}
          </dd>
       </dl>
       <div>
          <component v-bind:is="component_name"></component>
       </div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				all_echarts:['Pie','QianXi','Bar','LiQuidFill'],
				component_name:'LiQuidFill'

			}
		},
		methods: {
			init() {

			},
			change_component(name){
				this.component_name = name;
			}

		},
		components:{
			'Pie':()=>import('../components/echarts/pie'),
			'QianXi':()=>import('../components/echarts/qianxi02'),
			'LiQuidFill':()=>import('../components/echarts/liquidFill'),
			'Bar':()=>import('../components/echarts/bar')
		},
		mounted() {
			this.$nextTick(() => {
               this.init();
			})
		}
	}
</script>

<style scoped>
	.navs{
		display: flex;
		justify-content: flex-start;
	}
	.navs dd{
		margin: 0 15px;
		padding:3px 10px;
		background: #D1D1D1;
		text-decoration:underline;
	}

</style>