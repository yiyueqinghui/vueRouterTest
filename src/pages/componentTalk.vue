;<template>
	 <div id="parent">
	 	<h4>父组件数据改变，子组件数据也随之改变</h4>
	 	<Talk :msg="msg" :age="age"></Talk>
	 </div>
</template>

<script>
	export default {
		data(){
			return {
				age:28,
				msg:{
					name:'cj',
				}
				
			}
		},
		methods:{
			init(){
				setInterval(()=>{
					this.age = this.age + 1;
					this.msg.name = 'cj'+(Math.random()).toFixed(2);
				},3000)
			}
		},
		components:{
			Talk:()=>import('../components/talk')
		},
		mounted(){
			this.$nextTick(()=>{
				this.init()
			})
		}
	}
</script>

<style>
</style>