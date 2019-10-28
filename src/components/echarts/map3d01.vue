<template>
	<div>
    <p>geoJSON获取地址   <a :href="href">跳转地址</a></p>
    <div id="echarts" ref="container"></div>
	</div>
</template>

<script>
	import echarts from 'echarts';
  import  'echarts-gl';
  //这个json文件，通过跳转地址获取
  import shanJson from '../../assets/mockData/shanxi.json';
	export default {
		data() {
			return {
        href:' http://datav.aliyun.com/tools/atlas/#&lat=33.521903996156105&lng=104.29849999999999&zoom=4',
				option: {}

			}
		},
		methods: {
			init() {
				let me = this;

				var scatterData = [
          {
            "name": "太原市",
            "value": [
              112.48699,
              37.94036,
              100
            ]
          },
          {
            "name": "晋中市",
            "value": [
              112.70746,
              37.69978,
              100
            ]
          }

        ];
        var fireData = [
          {
            "name": "太原市",
            "value": [
              112.48699,
              37.94036,
              100
            ]
          }
        ];
        var barData = [
          {
            "name": "太原市",
            "value": [
              112.48699,
              37.94036,
              100
            ]
          }
        ];

        echarts.registerMap('shanxi', shanJson);

        me.option = {
          title: {
            text: '3D地图',
            left: 'center',
            top: 20
          },
          geo3D: {
            map: 'shanxi',
            environment: '#ffffff',
            viewControl: {
              center: [-10, 0, 10]
            },
            light: {
              main: {
                intensity: 1,
                shadow: true,
                alpha: 150,
                beta: 70
              },
              ambient: {
                intensity: 0
              },
              ambientCubemap: {
                diffuseIntensity: 1,
                texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
              }
            },
            groundPlane: {
              show: true
            },
            postEffect: {
              enable: false
            },
            itemStyle: {
              borderColor: 'rgb(62,215,213)',
              borderWidth: 1
            }

          },
          series: [{
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            data: scatterData,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              color: 'purple',
              borderColor: '#fff',
              borderWidth: 1
            },
            label: {
              show: true,
              formatter: '{b}',
              position: 'bottom',
              textStyle: {
                color: '#000',
                backgroundColor: '#fff',
              }
            }
          },
            {
              type: 'scatter3D',
              coordinateSystem: 'geo3D',
              data: fireData,
              symbol: 'pin',
              symbolSize: 30,
              itemStyle: {
                color: 'red',
                borderColor: '#fff',
                borderWidth: 1
              },
              label: {
                show: false,
                formatter: '{b}',
                position: 'right',
                textStyle: {
                  color: '#000',
                  backgroundColor: '#fff',
                }
              }
            },
            {
              type: 'bar3D',
              coordinateSystem: 'geo3D',
              bevelSize: 0,
              itemStyle: {
                color: '#17e3ff',
                opacity: 1
              },
              shading: 'lambert',
              data: barData,
            }
          ]
        };

        let initEcharts = echarts.init(me.$refs.container);
        initEcharts.setOption(me.option);
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
