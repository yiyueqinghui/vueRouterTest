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
			       defaultType:0,    //1  使用2D地图  0 常规图层
			       showRoad:true
			    });
			    map.addControl(type);
//			    type.hide();


                //指定地区的边界
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
                
                //新增wms图层
                //注意：demo这个图层是北美洲图层，所以需要看效果时，需要移动到北美去看
                var wms = new AMap.TileLayer.WMS({
                	url: 'https://ahocevar.com/geoserver/wms',   
                	blend: false, // 地图级别切换时，不同级别的图片是否进行混合 
                	tileSize: 512, // 加载WMS图层服务时，图片的分片大小 
                	params: { 'LAYERS': 'topp:states', VERSION:'1.3.0' } // OGC标准的WMS地图服务的GetMap接口的参数 
                }); 
                map.add(wms);
			    
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