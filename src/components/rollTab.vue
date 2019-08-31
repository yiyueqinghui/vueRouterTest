<template>
	<div class="roll">
		<h4>无限滚动表格</h4>
        <div style="height: 200px;" v-if="true">
			<RollTab :tabList="tableData">
				<el-table-column prop="date" label="日期" width="180"></el-table-column>
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="address" label="地址"></el-table-column>
			</RollTab>
		</div>	
		
		<div style="height: 400px;margin-top: 200px;">
			<RollTab :tabList="tableData">
				<el-table-column prop="date" label="日期" width="180"></el-table-column>
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="address" label="地址"></el-table-column>
			</RollTab>
		</div>	

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
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
						address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-01',
						name: '王小虎4',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-02',
						name: '王小虎5',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-04',
						name: '王小虎6',
						address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-01',
						name: '王小虎7',
						address: '上海市普陀区金沙江路 1518 弄'
					}
				],
				move: 0
			}

		},
		methods: {
			
		},
		components:{
			"RollTab":()=>import('@/components/rollList')
		},
		mounted() {
			this.$nextTick(() => {
				let copy_arr = JSON.parse(JSON.stringify(this.tableData));
				setTimeout(()=>{
					copy_arr.forEach((item,i)=>{
						item.date = item.date+'修改'+i;
					})
					this.tableData = copy_arr;
				},10000)
				
			})
		}
	}
</script>

<style>
	.el-table__body-wrapper {
		overflow-y: hidden!important;
	}
	
	.el-table__body {
		position: relative;
	}
</style>