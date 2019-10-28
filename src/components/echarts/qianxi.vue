<template>
	<div id="qianyi">
    <div ref="hotMap" style="height: 100%"></div>
  </div>
</template>

<script>
	import echarts from 'echarts'
  import 'echarts/map/js/china.js'
	export default {
		name:"echartmapDiv",
		data(){
			return {
				options:{
				    //backgroundColor: '#404a59',
				     title:{
						subtext:"",
						textStyle:{"color":"#94b8eb","fontSize":24,},
						x:"center",
						y:0,
						text:""
					},
				    tooltip : {
				        trigger: 'item',
				         formatter:(params)=>{
				            let data = params.name + "："+ params.value[2];
				            return data;
				          },
				    },
				    legend: {
				    	show:true,
				        orient: 'vertical',
				        top: 'top',
				        left: 'right',
				        data:['发出','到达'],
				        textStyle: {
				            color: '#fff'
				        },
				        selectedMode: 'single'
				    },
				    geo: {
				        map: 'china',
				        label: {
				            emphasis: {
				                show: false
				            }
				        },
				        roam: true,
				        itemStyle: {
				            normal: {
				                areaColor: '#071239',
				                opacity: 0.7,
            					  borderWidth: 3,
				                borderColor: '#009cd3'
				            },
				            emphasis: {
				                areaColor: '#2a333d'
				            }
				        }
				    },
				    series: []
				},
				geoCoordMap:{
				  	'上海': [121.4648,31.2891],
		                '东莞': [113.8953,22.901],
		                '东营': [118.7073,37.5513],
		                '中山': [113.4229,22.478],
		                '临汾': [111.4783,36.1615],
		                '临沂': [118.3118,35.2936],
		                '丹东': [124.541,40.4242],
		                '丽水': [119.5642,28.1854],
		                '乌鲁木齐': [87.9236,43.5883],
		                '佛山': [112.8955,23.1097],
		                '保定': [115.0488,39.0948],
		                '兰州': [103.5901,36.3043],
		                '包头': [110.3467,41.4899],
		                '北京': [116.4551,40.2539],
		                '北海': [109.314,21.6211],
		                '南京': [118.8062,31.9208],
		                '南宁': [108.479,23.1152],
		                '南昌': [116.0046,28.6633],
		                '南通': [121.1023,32.1625],
		                '厦门': [118.1689,24.6478],
		                '台州': [121.1353,28.6688],
		                '合肥': [117.29,32.0581],
		                '呼和浩特': [111.4124,40.4901],
		                '咸阳': [108.4131,34.8706],
		                '哈尔滨': [127.9688,45.368],
		                '唐山': [118.4766,39.6826],
		                '嘉兴': [120.9155,30.6354],
		                '大同': [113.7854,39.8035],
		                '大连': [122.2229,39.4409],
		                '天津': [117.4219,39.4189],
		                '太原': [112.3352,37.9413],
		                '威海': [121.9482,37.1393],
		                '宁波': [121.5967,29.6466],
		                '宝鸡': [107.1826,34.3433],
		                '宿迁': [118.5535,33.7775],
		                '常州': [119.4543,31.5582],
		                '广州': [113.5107,23.2196],
		                '廊坊': [116.521,39.0509],
		                '延安': [109.1052,36.4252],
		                '张家口': [115.1477,40.8527],
		                '徐州': [117.5208,34.3268],
		                '德州': [116.6858,37.2107],
		                '惠州': [114.6204,23.1647],
		                '成都': [103.9526,30.7617],
		                '扬州': [119.4653,32.8162],
		                '承德': [117.5757,41.4075],
		                '拉萨': [91.1865,30.1465],
		                '无锡': [120.3442,31.5527],
		                '日照': [119.2786,35.5023],
		                '昆明': [102.9199,25.4663],
		                '杭州': [119.5313,29.8773],
		                '枣庄': [117.323,34.8926],
		                '柳州': [109.3799,24.9774],
		                '株洲': [113.5327,27.0319],
		                '武汉': [114.3896,30.6628],
		                '汕头': [117.1692,23.3405],
		                '江门': [112.6318,22.1484],
		                '沈阳': [123.1238,42.1216],
		                '沧州': [116.8286,38.2104],
		                '河源': [114.917,23.9722],
		                '泉州': [118.3228,25.1147],
		                '泰安': [117.0264,36.0516],
		                '泰州': [120.0586,32.5525],
		                '济南': [117.1582,36.8701],
		                '济宁': [116.8286,35.3375],
		                '海口': [110.3893,19.8516],
		                '淄博': [118.0371,36.6064],
		                '淮安': [118.927,33.4039],
		                '深圳': [114.5435,22.5439],
		                '清远': [112.9175,24.3292],
		                '温州': [120.498,27.8119],
		                '渭南': [109.7864,35.0299],
		                '湖州': [119.8608,30.7782],
		                '湘潭': [112.5439,27.7075],
		                '滨州': [117.8174,37.4963],
		                '潍坊': [119.0918,36.524],
		                '烟台': [120.7397,37.5128],
		                '玉溪': [101.9312,23.8898],
		                '珠海': [113.7305,22.1155],
		                '盐城': [120.2234,33.5577],
		                '盘锦': [121.9482,41.0449],
		                '石家庄': [114.4995,38.1006],
		                '福州': [119.4543,25.9222],
		                '秦皇岛': [119.2126,40.0232],
		                '绍兴': [120.564,29.7565],
		                '聊城': [115.9167,36.4032],
		                '肇庆': [112.1265,23.5822],
		                '舟山': [122.2559,30.2234],
		                '苏州': [120.6519,31.3989],
		                '莱芜': [117.6526,36.2714],
		                '菏泽': [115.6201,35.2057],
		                '营口': [122.4316,40.4297],
		                '葫芦岛': [120.1575,40.578],
		                '衡水': [115.8838,37.7161],
		                '衢州': [118.6853,28.8666],
		                '西宁': [101.4038,36.8207],
		                '西安': [109.1162,34.2004],
		                '贵阳': [106.6992,26.7682],
		                '连云港': [119.1248,34.552],
		                '邢台': [114.8071,37.2821],
		                '邯郸': [114.4775,36.535],
		                '郑州': [113.4668,34.6234],
		                '鄂尔多斯': [108.9734,39.2487],
		                '重庆': [107.7539,30.1904],
		                '金华': [120.0037,29.1028],
		                '铜川': [109.0393,35.1947],
		                '银川': [106.3586,38.1775],
		                '镇江': [119.4763,31.9702],
		                '长春': [125.8154,44.2584],
		                '长沙': [113.0823,28.2568],
		                '长治': [112.8625,36.4746],
		                '阳泉': [113.4778,38.0951],
		                '青岛': [120.4651,36.3373],
		                '韶关': [113.7964,24.7028],
		                //大连追加
		                '朝阳': [120.449374,41.587847],
		                '铁岭': [123.740191,42.23289],
		                //洞头追加
		                '洞头': [121.160545,27.838357],
				},

				goData:[
				    [{name:'北京'}, {name:'上海',value:195}],
                    [{name:'北京'}, {name:'广州',value:190}],
                    [{name:'北京'}, {name:'大连',value:180}],
                    [{name:'北京'}, {name:'南宁',value:170}],
                    [{name:'北京'}, {name:'南昌',value:160}],
                    [{name:'北京'}, {name:'拉萨',value:150}],
                    [{name:'北京'}, {name:'长春',value:140}],
                    [{name:'北京'}, {name:'包头',value:130}],
                    [{name:'北京'}, {name:'重庆',value:120}],
                    [{name:'北京'}, {name:'常州',value:110}]
				],
				comeData:[
				    [{name:'上海',value:195}],
                    [{name:'广州',value:190}],
                    [{name:'大连',value:180}],
                    [{name:'南宁',value:170}],
                    [{name:'南昌',value:160}],
                    [{name:'拉萨',value:150}],
                    [{name:'长春',value:140}],
                    [{name:'包头',value:130}],
                    [{name:'重庆',value:120}],
                    [{name:'常州',value:110}]
				],

				color:['#a6c84c', '#ffa022', '#46bee9'],
				 //planePath :'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
				carPath:"path://M24.897,37.703c-0.525-1.393-1.006-3.48-1.006-3.48V24.061l0.695-1.392c0.697-1.81,0-13.642,0-13.642c-0.854-2.987-2.957-5.28-5.516-6.938C13.687-1.397,7.365-0.433,3.013,4.326c-1.135,1.24-2.184,3.082-2.646,4.702c0,0-0.696,11.832,0,13.642l0.696,1.392v10.161c0,0-0.479,2.088-1.006,3.48c0,0-0.387,10.439,0.866,11.971s2.366,4.316,11.554,4.316c9.188,0,10.302-2.785,11.554-4.316C25.284,48.142,24.897,37.703,24.897,37.703z M12.477,14.039c0,0,7.61-0.277,9.188,3.806v5.753c0,0,0,2.141-4.176,2.416h-5.013H7.466c-4.177-0.275-4.177-2.416-4.177-2.416v-5.753C4.867,13.761,12.477,14.039,12.477,14.039zM3.164,5.31c0.805-0.854,1.819-1.202,2.267-0.78c0.446,0.422,0.155,1.454-0.649,2.309c-0.806,0.853-1.82,1.201-2.268,0.78C2.067,7.196,2.358,6.164,3.164,5.31z M12.477,51.345c-11.229-0.65-10.022-7.518-10.022-7.518h10.022h10.022C22.499,43.828,23.706,50.695,12.477,51.345z M22.431,7.658c-0.447,0.422-1.461,0.073-2.268-0.779c-0.805-0.854-1.094-1.887-0.648-2.309c0.447-0.422,1.461-0.073,2.268,0.78C22.587,6.204,22.878,7.236,22.431,7.658z"
							}
						},
		props:{
			/*echartData: {
		      type: Object,
		    },
			transportType:{
			  type:String,
        default:function(){
          return '1';
        }
      }*/
		},

		methods:{
			 echartSet(){
			 	let that=this;
			 	// let transport_type = this.transportType;
			 	that.options.series=[];
			 	[['发出', that.goData],['到达', that.comeData]].forEach(function (item, i) {
			 	//[['发出', that.goData]].forEach(function (item, i) {
			 		if(i == 0){
			 			 that.options.series.push(/*{
				        name: item[0],
				        type: 'lines',
				        zlevel: 1,
				        effect: {
				            show: true,
				            period: 6,
				            trailLength: 0.7,
				            color: '#fff',
				            symbolSize: 3
				        },
				        lineStyle: {
				            normal: {
				                color: "#000",
				                width: 0,
				                curveness: 0.2
				            }
				        },
				        data: that.convertData(item[1])
				    },*/
				    {//线和箭头
				        name: item[0],
				        type: 'lines',
				        zlevel: 2,
				        effect: {
				            show: true,
				            period: 6,
				            trailLength: 0,
				            symbol: that.carPath,//飞机形状
				           // symbol:"arrow",
				            symbolSize: [8,16]
				        },
				        lineStyle: {
				            normal: {
				                color: that.color[i],
				                width: 1,
				                opacity: 1,
				                curveness: 0.2
				            }
				        },
				        data: that.convertData(item[1])
				    },
				    	//被攻击点
				  	{
						name: "发出",
						type: 'scatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: {
							period: 4,
							brushType: 'stroke',
							scale: 4
						},
						label: {
							normal: {
								show: true,
								position: 'right',
								//offset:[5, 0],
								color: '#000',
								formatter: '{b}',
								textStyle: {
									color: "#0f0"
								}
							},
							emphasis: {
								show: true,
								color: "#f60"
							}
						},
						symbol: 'circle',
						symbolSize: 20,
						itemStyle:{
							color:"#FF0000"
						},
						data: [{
							name: "北京",
							value:that.geoCoordMap["北京"].concat(20)
						}],
					},

				    {
				    	//目的地颜色
				        name: item[0],
				        type: 'effectScatter',
				        coordinateSystem: 'geo',
				        zlevel: 2,
				        rippleEffect: {
				            brushType: 'stroke'
				        },
				        label: {
				            normal: {
				                show: true,
				                position: 'bottom',
				                formatter: function(val){
				                  var arr = val.value;
				                  var tips = val.name + ':' + arr[2];
				                  return tips;
                        }
				            }
				        },
				        symbolSize: function (val) {
				            return val[2] / 8;
				        },
				        itemStyle: {
				            normal: {
				                color: that.color[i]
				            }
				        },
				        data: item[1].map(function (dataItem) {
				            return {
				                name: dataItem[1].name,
				                value: that.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				            };
				        })
				    }
				  );
			 		}
			 		else if(i == 1){
			 			 that.options.series.push(
				    {//线和箭头
				        name: item[0],
				        type: 'lines',
				        zlevel: 2,
				        effect: {
				            show: true,
				            period: 6,
				            trailLength: 0,
				            symbol: that.carPath,//飞机形状
				           // symbol:"arrow",
				            symbolSize: [8,16]
				        },
				        lineStyle: {
				            normal: {
				                color: that.color[i],
				                width: 1,
				                opacity: 1,
				                curveness: 0.2
				            }
				        },
				        data: that.convertData1(item[1])
				    },
				    	//被攻击点
					  {
						name: "到达",
						type: 'scatter',
						coordinateSystem: 'geo',
						zlevel: 3,
						rippleEffect: {
							period: 4,
							brushType: 'stroke',
							scale: 4
						},
						label: {
							normal: {
								show: true,
								position: 'right',
								//offset:[5, 0],
								color: '#000',
								formatter: '{b}',
								textStyle: {
									color: "#0f0"
								}
							},
							emphasis: {
								show: true,
								color: "#fff"
							}
						},
						itemStyle:{
							color:"#FF0000"
						},
						symbol: 'circle',
						symbolSize: 20,
						data: [{
							name: "北京",
							value:that.geoCoordMap["北京"].concat(10)
						}],
					},

				    {
				    	//目的地颜色
				        name: item[0],
				        type: 'effectScatter',
				        coordinateSystem: 'geo',
				        zlevel: 2,
				        rippleEffect: {
				            brushType: 'stroke'
				        },
				        label: {
				            normal: {
				                show: true,
				                position: 'bottom',
                        formatter: function(val){
                          var arr = val.value;
                          var tips = val.name + ':' + arr[2];
                          return tips;
                        }
				            }
				        },
				        symbolSize: function (val) {
				            return val[2] / 8;
				        },
				        itemStyle: {
				            normal: {
				                color: that.color[i]
				            }
				        },
				        data: item[1].map(function (dataItem) {
				            return {
				                name: dataItem[0].name,
				                value: that.geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
				            };
				        })
				    }
				  );
			 		}

				})
//				if(this.echartData.title != undefined ){
//					this.options.title.text = this.echartData.title;
//				}
//				if(this.echartData.yName != undefined ){
//					this.options.yAxis[0].name = this.echartData.yName;
//				}
//				if(this.echartData.xAxisData != undefined ){
//					this.options.xAxis[0].data = this.echartData.xAxisData;
//				}
//				if(this.echartData.seriesData != undefined ){
//					let seriesData = this.echartData.seriesData;
//					for(let i=0;i<seriesData.length;i++){
//						this.options.legend.data.push(seriesData[i].name);
//					}
//					this.options.series= this.echartData.seriesData;
//				}
			},
			 drawLine() {
			    // let echartId=this.$slots.echartDiv[0].data.attrs.id;
          let echartId = this.$refs.hotMap;
		      let myChart = echarts.init(echartId);
		      myChart.setOption(this.options);
		   },
		   convertData (data) {
			    var res = [];
			    for (var i = 0; i < data.length; i++) {
			        var dataItem = data[i];
			        var fromCoord = this.geoCoordMap[dataItem[0].name];
			        var toCoord = this.geoCoordMap[dataItem[1].name];
			        if (fromCoord && toCoord) {
			            res.push([{
			                coord: fromCoord
			            }, {
			                coord: toCoord
			            }]);
			        }
			    }
			    return res;
			},
			 convertData1(data) {
				var res = [];
				for(var i = 0; i < data.length; i++) {
					var dataItem = data[i];
					var fromCoord = this.geoCoordMap[dataItem[0].name];
					var toCoord = this.geoCoordMap["北京"];
					if(fromCoord && toCoord) {
						res.push([{
							coord: fromCoord,
							//value: dataItem[0].value
						}, {
							coord: toCoord,
						}]);
					}
				}
				return res;
			}
		},
		watch: {
	     /* newSeriesData:function(){
	     	this.echartSet();
	        this.drawLine();
	      },*/
	   },
	    computed: {
	    	/*newSeriesData() {
		    　　　　return this.echartData.seriesData
		    　　},*/
		},
		created(){
			 this.echartSet();
		},
		mounted () {
			 this.drawLine();
		},
	}
</script>

<style scoped="">
   #qianyi{
     height: 100%;
     background-color:#000000;
   }
</style>
