<template>
	<div>
	     <p>geoJSON获取地址   <a :href="href">跳转地址</a></p>
       <div id="echarts" ref="container"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
  import mapJson from '../../assets/mockData/map.json';
	export default {
		data() {
			return {
				href:' http://datav.aliyun.com/tools/atlas/#&lat=33.521903996156105&lng=104.29849999999999&zoom=4',
				option: {}

			}
		},
		methods: {
			init() {
			  console.log(mapJson);
				let me = this;
				// $.get('https://geo.datav.aliyun.com/areas/bound/110100_full.json', function(geoJson) {
					echarts.registerMap('BeiJing', mapJson);
					me.option = {
						// color: ['red', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
						title: {
							text: '北京各区图',
							left: 'center'
						},
						tooltip: {
							trigger: 'item',
							showDelay: 0,
							transitionDuration: 0.2,
							formatter: function(params) {
							  console.log(params);
								var value = (params.value + '').split('.');
								value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
								return params.seriesName + '<br/>' + params.name + ': ' + value;
							}
						},
						visualMap: {
							left: 'right',
							min: 50,
							max: 1000,
							inRange: {
								color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
							},
							text: ['High', 'Low'], // 文本，默认为数值文本
							calculable: true
						},
						series: [{
							name: '北京市',
							type: 'map',
							roam: true,
							map: 'BeiJing',
							itemStyle: {
								normal: {
									label: {
										show: true
									}
								}
							},
							// 文本位置修正
							textFixed: {
								Alaska: [20, -20]
							},
							data: [
							    { name: '怀柔区',	value: 50},
							    { name: '密云区',	value: 100},
							    { name: '朝阳区',	value: 520},
							    { name: '海淀区',	value: 850},
							    { name: '东城区',	value: 200},
							    { name: '西城区',	value: 300},
							    { name: '怀柔区',	value: 400},
							    { name: '通州区',	value: 700},
							    { name: '大兴区',	value: 900},
							    { name: '石景山区',value: 1000},
                  { name: '房山区',value: 200},

                  { name: '延庆区',	value: 700},
                  { name: '昌平区',	value: 900},
                  { name: '门头沟区',value: 100},
                  { name: '平谷区',value: 200},
                  { name: '顺义区',value: 1000},

							]
						}]
					};
          let initEcharts = echarts.init(me.$refs.container);
          initEcharts.setOption(me.option);
				// });
			}

		},
		created() {

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
		height: 500px;
	}
</style>
