<template>
	<div class="roll" >
		<h4>无限滚动表格</h4>
		<el-table ref="roll" :data="tableData" height="200" border style="width: 100%;overflow: hidden;">
			<el-table-column prop="date" label="日期" width="180"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
		</el-table>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
				{
					date: '2016-05-03',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1518 弄'
				}, 
				{
					date: '2016-05-02',
					name: '王小虎2',
					address: '上海市普陀区金沙江路 1518 弄'
				}, 
				{
					date: '2016-05-04',
					name: '王小虎3',
					address: '上海市普陀区金沙江路 1518 弄'
				}, 
				{
					date: '2016-05-01',
					name: '王小虎4',
					address: '上海市普陀区金沙江路 1518 弄'
				}, 
				{
					date: '2016-05-08',
					name: '王小虎5',
					address: '上海市普陀区金沙江路 1518 弄'
				}, 
				{
					date: '2016-05-06',
					name: '王小虎6',
					address: '上海市普陀区金沙江路 1518 弄'
				}, 
				{
					date: '2016-05-07',
					name: '王小虎7',
					address: '上海市普陀区金沙江路 1518 弄'
				}
				],
				move:0
			}
			
		},
		methods:{
			scroll(){
				var table_height = $('.el-table__body').height(),
					box_height = $('.el-table__body-wrapper').height();
					
				let i = 0,length = this.tableData.length;
//				if(table_height>box_height){
					setInterval(()=>{
						this.move -= 2;
						
						$('.roll .el-table__body').css('top',this.move+'px');
						if(Math.abs(this.move)%20 === 0){
							this.tableData.push(this.tableData[i]);
//							this.tableData.shift();
                            i += 1;
                            
						}
						
					},200)
//				}
				
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.scroll();
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

</style>