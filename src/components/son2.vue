<template>
  <div id="son2" v-if="Object.keys(msg).length > 0 ">
    <p>son2</p>
    <table border="1">
      <tr>
        <th>姓名</th>
        <th>年纪</th>
      </tr>
      <tr>
        <td>{{msg.name}}</td>
        <td>{{msg.age}}</td>
      </tr>
    </table>
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
        init(){
          setTimeout(()=>{
            this.$emit('show',true)
          },5000)
        }
      },
      mounted(){
        this.$nextTick(function () {
          this.init()
        })
      }
    }
</script>

<style scoped>
  table{
    margin: 0 auto;
  }
</style>
