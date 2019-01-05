<template>
  <div class="hello">
	<div>
        <p>你好妈</p>
        <div class="kk">
            <ul>
                <li>11</li>
                <li>22</li>
                <li>33</li>
            </ul>
        </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
  	return {
  		
  	}
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
    .kk{
        background-color: #ff5669;
        color: #000;
    }
</style>
