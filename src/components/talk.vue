<template>
  <div id="son2">
    <table border="1">
      <tr>
        <th>姓名</th>
        <th>年纪</th>
      </tr>
      <tr>
        <td>{{msg.name}}</td>
        <td>{{ age }}</td>
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
        },
        age:{
        	type:Number
        }
      },
      data(){
        return {

        }
      },
      methods:{
        
      },
      mounted(){
        this.$nextTick(function () {
          
        })
      }
    }
</script>

<style scoped>
  table{
    margin: 0 auto;
  }
</style>
