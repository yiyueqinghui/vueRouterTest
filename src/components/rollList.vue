<template>
	<div ref="roll" :id="box_id" style="height: 100%;overflow: hidden;">
		<div ref="rollList" :id="list_id">
			<el-table  :data="list" border  :row-class-name="tableRowClassName" style="width: 100%;">
        <el-table-column v-if="isOrder === '2'" label="排序" width="100">
          <template slot-scope="scope"><span :class="[{first_order:scope.row.order == 1},{second_order:scope.row.order == 2},{third_order:scope.row.order == 3},'mark_order']" >{{ scope.row.order }}</span></template>
        </el-table-column>
				<slot></slot>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			tabList:{
				type:Array,
				default:[]
			},
      isOrder:{
			  type:String,
        default:'1'     // '1' 不排序   ‘2’ 排序
      }
		},
		data() {
			return {
				list:[],
        len:0,
				box_id:'',
				list_id:'',
				interMove:null,
				all_line_height:[]
			}

		},
		watch:{
			tabList:{
				handler(newVal,oldVal){
					if(this.interMove) clearInterval(this.interMove);
					this.list = JSON.parse(JSON.stringify(newVal));
          this.initList();
					setTimeout(()=>{
						this.all_height();
						this.scroll();
					},3000)
				},
				deep:true
			}
		},
		methods:{
			scroll(){
				if(this.interMove) clearInterval(this.interMove);
				var table_height = $("#"+this.box_id).height();
				var	box_height = $("#"+this.list_id).height();
				let i = 0 ,length = this.list.length;
				let container = $('#'+this.box_id+' .el-table__body');

				if(table_height<box_height){
				    this.interMove = setInterval(()=>{
						this.move = - this.all_line_height[i];
						i = (i+1)%length;
            container.animate({
              top:this.move+'px'
            },1000,()=>{
              this.list.push(this.list[0]);
              this.list[0]['order_add'] += this.len;
              this.list.shift();
              container.css('top','0px');
            })

					},4000)

				}
			},
			//获取首行行高
			get_first_line(){
				let height = $('#'+this.list_id+' .el-table__row:first').height();
				return height;
			},
			//初始化获取所有行高
			all_height(){
				let all_row = $('#'+this.list_id+' .el-table__row');
				this.all_line_height = [];
				for(var i=0;i<all_row.length;i++){
					let height = $(all_row[i]).height();
					this.all_line_height.push(height);
				}
			},
			S4(){
		        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		  },
      tableRowClassName({row, rowIndex}){
			  let order = row.order_add;
			  if(order%2 === 0){
			    return 'odd_line'
        }else{
			    return 'even_line'
        }
      },
      initList(){
        this.len = this.list.length;
        for(var i=0;i<this.list.length;i++){
          this.list[i]['order'] = i+1;
          this.list[i]['order_add'] = i+1;
        }
      }
		},
		created(){
			this.box_id = 'box_id'+this.S4()+'_'+this.S4();
			this.list_id = 'list_id'+this.S4()+'_'+this.S4();
			this.list = JSON.parse(JSON.stringify(this.tabList));
			this.initList();

		},
    destroyed(){
		  console.log('close');
		  clearInterval(this.interMove);
    },
		mounted(){
			this.$nextTick(()=>{
				this.all_height();
				let random_time = Math.random()*4000;
				setTimeout(()=>{
				   this.scroll();
				},random_time)

			})
		}
	}
</script>

<style>
	.el-table__body-wrapper{
		overflow-y: hidden!important;
	}
	.el-table__body{
		position: relative;

	}
	.roll_animate{
		transition: top 0.825s;
	}
  .mark_order{
    display: inline-block;
    width:25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .el-table .odd_line{
    background: #f0f9eb;
  }
  .el-table .even_line{
    background: transparent;
  }
  /*前三名*/
  .first_order{
    background-color: #1bcaff;
    color:#ffffff;
  }
  .second_order{
    background-color: #ff4d4f;
    color:#ffffff;
  }
  .third_order{
    background-color: #d7ff61;
    color:#ffffff;
  }

</style>
