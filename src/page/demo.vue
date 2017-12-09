<template>
	<div>
		<p>counter is: {{count}}</p>
		<button @click="increment(2)">+5+2</button>
		<button @click="decrement">-3</button>
	</div>
</template>
<script type="text/javascript">
	import {mapGetters,mapActions} from 'vuex'
	export default{
		data () {
			return {
				index:0
			}
		},
		computed : mapGetters([
			'count'
		]),
		components : {
			
		},
		methods : {
			...mapActions({increment:'increment',decrement:'decrement'})
		}
	}
</script>
<style type="text/css" scoped>
	p{
		font-size:30px;
	}
	button{
		margin-top:20px;
		width:100px;
		height:50px;
		font-size:30px;
	}
</style>