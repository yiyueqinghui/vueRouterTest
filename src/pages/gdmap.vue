<template>
    <div id="container">

    </div>
</template>

<script>
	export default {
		data(){
			return {
        gpsdata:[],   //车辆坐标
        markerIndexOfs_gps:[],   //已标记车辆的牌照
        markerObjs_gps:[],       //marker信息集合
        img_src:'../../static/img/map/bus.png',
        open_plate:''      //当前打开窗口的车辆


			}
		},
		methods:{
			init(){
				this.gdmap = new AMap.Map('container', {
			        resizeEnable: true,
			        center: [116.397428, 39.90923],
//			      mapStyle:'amap://styles/5bed669cc9cc000dc554fe0d684ba7d0',
			        zoom: 10
			  });

			    //地图类型切换
			    var type= new AMap.MapType({
			       defaultType:0,    //1  使用2D地图  0 常规图层
			       showRoad:true
			    });
          this.gdmap.addControl(type);
//			  type.hide();


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
          disProvince.setMap(this.gdmap);

          //新增wms图层
          //注意：demo这个图层是北美洲图层，所以需要看效果时，需要移动到北美去看
          var wms = new AMap.TileLayer.WMS({
            url: 'https://ahocevar.com/geoserver/wms',
            blend: false, // 地图级别切换时，不同级别的图片是否进行混合
            tileSize: 512, // 加载WMS图层服务时，图片的分片大小
            params: { 'LAYERS': 'topp:states', VERSION:'1.3.0' } // OGC标准的WMS地图服务的GetMap接口的参数
          });
          this.gdmap.add(wms);

			    //实时路况图层
			    /*
			    var trafficLayer = new AMap.TileLayer.Traffic({
			        zIndex: 10
			    });
			    this.gdmap.add(trafficLayer);//添加图层到地图
			    */

          /*创建覆盖物集合对象*/
          this.gpsGroup=new AMap.OverlayGroup();

        //创建信息窗口对象
          this.infowindow=new AMap.InfoWindow({offset:new AMap.Pixel(0,-5)});
          this.infowindow.on('close',function(){
            this.open_plate = '';   //关闭窗口时，车牌改为''
          });


			    //模拟数据,更新图标
          setInterval(()=>{
            this.gpsShow();
          },5000)


			},
      //模拟车辆位置信息
      gpsShow() {
        var num=10
        var me =this;
        var center = new AMap.LngLat(116.397428, 39.90923);
        var plate_num=12345
        for (var j = 0; j <num; j++) {
          me.gpsdata.push({
            plate_num:"京B"+plate_num+1,
            lng: center.getLng() + Math.random()*0.5,
            lat: center.getLat() +  Math.random()*0.45,
            azimuth:Math.random()*360,
            speed:Math.random()*60,
          })
          plate_num++
        }
        for (var j = 0; j <num; j++) {
          me.gpsdata.push({
            plate_num:"京B"+plate_num+1,
            lng: center.getLng() + Math.random()*0.7,
            lat: center.getLat() -  Math.random()*0.45,
            angle:Math.random()*360,
            speed:Math.random()*60,
          })
          plate_num++
        }
        for (var j = 0; j <num; j++) {
          me.gpsdata.push({
            plate_num:"京B"+plate_num+1,
            lng: center.getLng() - Math.random()*0.5,
            lat: center.getLat() +  Math.random()*0.45,
            azimuth:Math.random()*360,
            speed:Math.random()*60,
          })
          plate_num++
        }
        for (var j = 0; j <num; j++) {
          me.gpsdata.push({
            plate_num:"京B"+plate_num+1,
            lng: center.getLng() - Math.random()*0.7,
            lat: center.getLat() -  Math.random()*0.45,
            azimuth:Math.random()*360,
            speed:Math.random()*60,
          })
          plate_num++
        }
        $.each(me.gpsdata, function(n, value) {
          me.initGps(me,value);
        });
      },
      //添加或更新车辆图标位置
      initGps(me,value){
        let indexOfs_gps = me.markerIndexOfs_gps;   //已经标点过的车辆牌照信息存入数组markerIndexOfs_gps
        let objs_gps = me.markerObjs_gps;
        let markerNow=null;

        if(indexOfs_gps.indexOf(value.plate_num) > -1){   //车辆已经存在，移动车辆
          objs_gps[indexOfs_gps.indexOf(value.plate_num)].setPosition([value.lng, value.lat]);
          //修改自定义信息
          objs_gps[indexOfs_gps.indexOf(value.plate_num)].setExtData(value);
          markerNow=objs_gps[indexOfs_gps.indexOf(value.plate_num)];

          if(value.plate_num == me.open_plate){
              me.infowindow.setPosition(new AMap.LngLat(value.lng, value.lat));
              let content = me.infoTemplate(value);
              me.infowindow.setContent(content);
          }

        }else{            //新增车辆
          var imgUrl=me.img_src;
          //标记车辆点位到地图上
          var marker = new AMap.Marker({
            position: [value.lng, value.lat],
            icon: imgUrl,
            map:me.gdmap,
            offset: new AMap.Pixel(-12, -12),
            //autoRotation: true,
            extData : value,
            //angle : value.azimuth,
            zIndex : 1000
          });

          //点击车辆图标，显示弹窗
          marker.on('click',me.markerClick);

          //保存已标记的车辆的牌照
          me.markerIndexOfs_gps.push(value.plate_num);
          //保存已标记marker
          me.markerObjs_gps.push(marker);
          //添加单个覆盖物到OverlayGroup类中(OverlayGroup类=>对实例集合做整体操作，避免开发者对多个需要设置同样属性的覆盖物实例做循环处理)
          me.gpsGroup.addOverlay(marker);
          //me.gdmap.add(marker);
          //markerNow=marker;
        }

      },
      //点击车辆图标显示弹窗
      markerClick(e){
        let markerData=e.target.getExtData();
        let pos = e.target.getPosition();
        let content = this.infoTemplate(markerData);
        this.infowindow.setContent(content);
        this.infowindow.open(this.gdmap,pos);
        this.open_plate = markerData.plate_num;
      },
      //弹窗模版
      infoTemplate(data){
        let content="";
        content += "<table class='windowTb'>";
        content += "<tr><td>车牌号:</td><td>"+data.plate_num+"</td></tr>";
        content += "<tr><td>速度:</td><td>"+data.speed.toFixed(2)+"km/h</td></tr>";
        content += "<tr><td>经度:</td><td>"+data.lng.toFixed(4)+"</td></tr>";
        content += "<tr><td>纬度:</td><td>"+data.lat.toFixed(4)+"</td></tr>";
        content += "</table>";
        return content;

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
