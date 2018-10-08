<template>
  <div id="app" style="margin:5% auto;">
			<h1>ok</h1>
			<vue-panel-selector :items="items"></vue-panel-selector>
  </div>
</template>

<script>
let myCityData = [{
	id: '100',
	name: '湖南',
	children: [{
		id: '102',
		name: '湘潭',
		children: []
	}, {
		id: '110',
		name: '长沙',
		children: [{
			id: '111',
			name: '岳麓区'
		}, {
			id: '112',
			name: '开福区'
		}, {
			id: '113',
			name: '高新区'
		}, {
			id: '114',
			name: '望城区'
		}, {
			id: '115',
			name: '雨花区'
		}, {
			id: '116',
			name: '天心区'
		}, {
			id: '116',
			name: '宁乡县'
		}, {
			id: '116',
			name: '芙蓉区'
		}, {
			id: '116',
			name: '浏阳市'
		}, ]
	}, {
		id: '103',
		name: '邵阳',
		children: []
	}, {
		id: '101',
		name: '岳阳',
		children: []
	}, {
		id: '102',
		name: '衡阳',
		children: []
	}, {
		id: '103',
		name: '怀化',
		children: []
	}, ]
}, {
	id: '002',
	name: '广东',
	children: [{
		id: '201',
		name: '广州',
		children: []
	}, {
		id: '202',
		name: '深圳',
		children: []
	}, {
		id: '203',
		name: '韶关',
		children: []
	}, {
		id: '204',
		name: '东莞',
		children: []
	}, ]
}, {
	id: '003',
	name: '四川',
	children: [{
		id: '301',
		name: '成都',
		children: []
	}, {
		id: '302',
		name: '绵阳',
		children: []
	}, {
		id: '303',
		name: '自贡',
		children: []
	}, ]
}, {
	id: '004',
	name: '贵州',
	children: []
}, {
	id: '005',
	name: '江西',
	children: []
}]
export default {
  name: 'app',
  data () {
    return {
      items: myCityData
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
