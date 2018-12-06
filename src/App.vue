<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
		<div class="block">
			<el-cascader
				:options="options"
				v-model="selectedOptions"
				@change="handleChange">
			</el-cascader>
		</div>
		<el-button type="danger" @click="add">危险按钮</el-button>
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const opt =  [
					{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }]
export default {
  name: 'app',
  components: {
    HelloWorld
  },
	 data() {
      return {
        options:[],
        selectedOptions: [],
        selectedOptions2: []
      };
    },
		mounted() {
		
		},
    methods: {
				handleChange(value) {
					console.log(this.selectedOptions)
				},
				add(){
					this.options = opt;
			}
		},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
