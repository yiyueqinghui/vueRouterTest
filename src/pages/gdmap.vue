<template>
    <div id="container">
    
    </div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			init(){
				var map = new AMap.Map('container', {
			        resizeEnable: true,
			        center: [116.397428, 39.90923],
//			        mapStyle:'amap://styles/5bed669cc9cc000dc554fe0d684ba7d0',
			        zoom: 13
			    });
			    
			        //地图类型切换
			    var type= new AMap.MapType({
			       defaultType:1,    //使用2D地图
			       showRoad:true
			    });
			    map.addControl(type);
//			    type.hide();


                var disProvince = new AMap.DistrictLayer.Province({
				    zIndex:12,
				    adcode:['110000'],
				    depth:2,
				    styles:{
				        'fill':'',
				        'province-stroke':'cornflowerblue',
				        'city-stroke': 'blue',//中国地级市边界
				        'county-stroke': 'rgba(255,255,255,0.5)'//中国区县边界  
				    }
				})
                disProvince.setMap(map);
			    
			    //实时路况图层
			    /*
			    var trafficLayer = new AMap.TileLayer.Traffic({
			        zIndex: 10
			    });
			    map.add(trafficLayer);//添加图层到地图
			    */
			}
			
		},
		mounted(){
			this.$nextTick(()=>{
				this.init();
			})
			
		}
	}
</script>

<style scoped="">
    #container{
    	width: 100%;
    	height: 100%;
    	min-height: 500px;
    }

</style>