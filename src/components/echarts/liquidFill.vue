<template>
	<div id="echarts" >
		<p>
			水波球，必须引入第三方脚本echarts-liquidfill，直接使用npm安装  npm i echarts-liquidfill -s
		    随后引入即可。 
		</p>
		<div class='box' ref="container"></div>
       
	</div>
</template>

<script>
	import echarts from 'echarts'
	import echartsLiquidfil from 'echarts-liquidfill'
	export default {
		data() {
			return {
				option: {}

			}
		},
		methods: {
			init() {
				let initEcharts = echarts.init(this.$refs.container);
				initEcharts.setOption(this.option);

			}

		},
		created() {
			var value = 0.48;
			var data = [value, value, value, value, value, ];
			this.option = {
				backgroundColor: '#fff',
				graphic: [{
					type: 'group',
					left: 'center',
					bottom: 10,
					children: [{
						type: 'text',
						z: 100,
						left: '10',
						top: 'middle',
						style: {
							fill: '#000',
							text: '磁盘剩余空间：',
							font: '16px Microsoft YaHei'
						}
					}, {
						type: 'text',
						z: 100,
						left: '120',
						top: 'middle',
						style: {
							fill: '#000',
							text: '128G',
							font: '24px Microsoft YaHei'
						}
					}]
				}],
				series: [{
					type: 'liquidFill',
					radius: '70%',
					center: ['50%', '40%'],
					data: data,
					backgroundStyle: {
						borderWidth: 5,
						borderColor: '#1daaeb',
						color: '#fff'
					},
					label: {
						normal: {
							formatter: (value * 100).toFixed(2) + '%',
							textStyle: {
								fontSize: 20
							}
						}
					}
				}]
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.init();
			})
		}
	}
</script>

<style scoped>
	#echarts {
		width: 100%;
	}
	.box{
		height: 500px;
	}
</style>