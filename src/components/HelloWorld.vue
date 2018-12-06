<template>
  <div class="hello">
	<div>
	</div>
  </div>
</template>

<script>s
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  name: 'HelloWorld',
  components:{
	  vueWaterfallEasy
  },
  data() {
  	return {
  		imgsArr: []
  	}
  },
  mounted() {
  	this.imgsArr=['https://image.fenlaishop.com/product/admin_2c908381653c873d01657fe13ba40090_1541991781760.jpg?x-oss-process=image/resize,m_fill,h_320,w_320,limit_0',
					'https://image.fenlaishop.com/product/admin_2c908381653c873d01657fe13ba40090_1541991781760.jpg?x-oss-process=image/resize,m_fill,h_320,w_320,limit_0',
					'https://image.fenlaishop.com/product/admin_2c908381653c873d01657fe13ba40090_1541991781760.jpg?x-oss-process=image/resize,m_fill,h_320,w_320,limit_0']
  },
  props: {
    msg: String
  },
	methods: {
		getstring() {
			
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
