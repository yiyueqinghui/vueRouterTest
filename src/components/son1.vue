<template>
    <div id="son1" v-if="Object.keys(msg).length >0" data-son-component>
      <div ref="son01" id="title"> </div>
      <table border="1" >
        <tr>
          <th>姓名</th>
          <th>年纪</th>
        </tr>
        <tr>
          <td>{{msg.name}}</td>
          <td>{{msg.age}}</td>
        </tr>
      </table>
      <h4 style="text-align: left">vue中使用refs定位dom出现undefined的解决方法</h4>
      <p style="text-align: left;font-size: 20px;">
        原因：<br/>
        在mounted阶段，DOM结构准备就绪，但是这里的准备就绪需要特别说明一下：<br/>

        虽然DOM结构已经出来了，但是如果在DOM结构中的某个DOM节点使用了v-if、v-show或者v-for
        （*即根据 <i style="color:red;">获得的后台数据 或 父组件/路由传递过来的参数</i> 来动态操作DOM，即响应式），
        那么这些DOM是不会再mounted阶段找到的。<br/><br/>

        如果想要真正地在DOM加载完成后拿到数据，就需要调用VUE的全局api ： this.$nextTick(() => {})<br/>

        如果说mounted阶段是加载阶段，那么updated阶段则是完成了数据更新到DOM的阶段(对加载回来的数据进行处理)，
        此时，ref、数据等等全部都挂载到DOM结构上去，在update阶段使用this.$refs.xxx，就100%能找到该DOM节点。<br/><br/>

        updated与mounted不同的是，在每一次的DOM结构更新，vue都会调用一次updated(){}钩子函数！而mounted仅仅只执行一次而已
      </p>
      <h4>关于$refs的使用，官方文档特别给出了以下提示：</h4>
      <img src="../assets/img/2017122111181111.png"/>
    </div>
</template>

<script>
    export default {
        props:{
          msg:{
            type:Object,
            default:{}
          }
        },
        data(){
          return {

          }
        },
        methods:{
          add(){
            console.log(123);
            if(Object.keys(this.msg).length > 0){
              let box = document.createElement('p')
              box.innerHTML = 'son1'
              // console.log(this.$refs.son01)
              this.$refs.son01.appendChild(box);
              return;
            }
            setTimeout(()=>{
                this.add();
            },100)

          },
          init(){
            if(Object.keys(this.msg).length > 0)  this.add();

            setTimeout(()=>{
              this.$emit('show',true)
            },5000)
          }
        },
        updated(){
          this.$nextTick(function () {
             this.add()
          })
        },
        mounted(){
          this.$nextTick(function () {
            this.init()
          })
        }
    }
</script>

<style>
    @import '../assets/css/basic.css';
    table{
      margin: 0 auto;
    }

</style>
