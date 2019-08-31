<template>
	<div ref="roll" :id="box_id" style="height: 100%;overflow: hidden;">
		<div ref="rollList" :id="list_id">
			<el-table  :data="list" border style="width: 100%;">
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
			}
		},
		data() {
			return {
				list:[],
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
		    }
		},
		created(){
			this.box_id = 'box_id'+this.S4()+'_'+this.S4();
			this.list_id = 'list_id'+this.S4()+'_'+this.S4();
			this.list = JSON.parse(JSON.stringify(this.tabList));
			
		},
		mounted(){
			this.$nextTick(()=>{
				console.log('update');
				this.all_height();
				let random_time = Math.random()*3000;
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

</style>