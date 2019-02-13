<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
//import axios from 'axios'
export default {
  	name: 'Home'
 //  	data () {
	//   	return {
	//   		msg:"aaa",
	//   		city:'AU'
	//   	}
 //  	},
 //  	methods: {
	// 	getHomeData () {
	// 		axios.get('/api/index.json?city=' + this.city)
	// 			.then(this.getDataOk)			
	// 	},
	// 	getDataOk (res) {
	// 		const data = res.data
	// 		if (data.ret && data.data) {
	// 			this.bannerData = data.data.bannerData
	// 			this.menuList = data.data.menuList
	// 			this.recommendList = data.data.recommendList
	// 			this.weekendList = data.data.weekendList
	// 		}
	// 	}
	// },
	// mounted () {
	// 	this.getHomeData()
	// }
}
</script>

<style scoped>

</style>
