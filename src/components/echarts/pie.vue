<template>
	<div id="echarts" ref="container">

	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				option:{}

			}
		},
		methods: {
			init() {
				let initEcharts = echarts.init(this.$refs.container);
				initEcharts.setOption(this.option);

			}

		},
		created() {
			var colorList = ['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', "rgba(250,250,250,0.5)"];
			this.option = {
				title: {
					text: '80',
					subtext: '总平均值(分)',
					x: 'center',
					y: 'center',
					textStyle: {
						fontSize: 30,
						fontWeight: 'normal',
						color: ['#333']
					},
					subtextStyle: {
						color: '#666',
						fontSize: 14
					},
				},
				series: [
					// 主要展示层的
					{
						radius: ['25%', '51%'],
						center: ['50%', '50%'],
						type: 'pie',
						itemStyle: {
							normal: {
								color: function(params) {
									return colorList[params.dataIndex]
								}
							}
						},
						labelLine: {
							normal: {
								show: true,
								length: 15,
								length2: 130,
								lineStyle: {
									color: '#d3d3d3'
								},
								align: 'center'
							},
							color: "#000",
							emphasis: {
								show: false
							}
						},
						label: {
							normal: {
								formatter: function(params) {
									var str = '{nameStyle|'+params.name+'}{rate|' + params.percent + '%}';
									return str;
								},
								padding: [0, -115],
								height: 45,
								rich: {
									nameStyle: {
										fontSize: 16,
										color: "#555",
										align: 'left'
									},
									valueStyle:{
										fontSize:16,
										color: "#dfdfdf",
										align: 'left'
									},
									rate: {
										fontSize: 20,
										color: "#1ab4b8",
										align: 'left'
									}
								}
							}
						},
						data: [{
								value: 17,
								name: '体育技能',
							},
							{
								value: 23,
								name: '体育行为'
							},
							{
								value: 27,
								name: '体质健康'
							},
							{
								value: 33,
								name: '体育意识'
							},
							{
								value: 9,
								name: '体育知识'
							}
						],
					},
					// 边框的设置
					{
						radius: ['47%', '51%'],
						center: ['50%', '50%'],
						type: 'pie',
						label: {
							normal: {
								show: false
							},
							emphasis: {
								show: false
							}
						},
						labelLine: {
							normal: {
								show: false
							},
							emphasis: {
								show: false
							}
						},
						animation: false,
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								color: 'rgba(250,250,250,0.5)'
							}
						},
						data: [{
							value: 1,
						}],
					}
				]
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
	#echarts{
		width: 100%;
		height:500px;
	}

</style>