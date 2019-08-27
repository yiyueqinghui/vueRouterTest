<template>
    <div id="parent">
       <h2>父子路由之间的数据相互传递，与父子组件之间数据传递相同</h2>
       <p>参考链接：<a href="https://jingyan.baidu.com/article/f96699bb00f267894e3c1ba6.html"> 点击跳转</a> </p>
       <ul>
         <li>
           <router-link to="/first">第一个子路由</router-link>
         </li>
         <li>
           <router-link to="/second">第二个子路由</router-link>
         </li>
       </ul>
       <div id="content">
         <router-view :msg="msg" @show="show" ></router-view>
       </div>
       <p id="footer" v-show="display">页脚</p>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            msg:{},
            dataArr:[ ],
            display:false
          }
        },
        methods:{
          changeMsg(i){
            this.msg = this.dataArr[i]
          },
          init(){
            setTimeout(()=>{
              let arr = [
                {
                  name:'cj',
                  age:28
                },
                {
                  name:'lq',
                  age:25
                }
              ]
              this.dataArr = [...arr]
              this.changeMsg(0)
            },2000)
          },
          show(bol){

            this.display = bol
          }
        },
        beforeRouteUpdate(to,from,next){
          if(to.path == '/first'){
            this.changeMsg(0)
          }else{
            this.changeMsg(1)
          }
          this.display = false
          next();
        },
        mounted(){
          this.$nextTick(function () {
             this.init()
          })
        }
    }
</script>

<style scoped>
   ul li{
     display: inline-block;
     margin: 0 20px;
   }
  .router-link-active{
    color: #ff3a49;
  }
   #footer{
     background-color:#d1d1d1;
   }
</style>
