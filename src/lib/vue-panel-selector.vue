<template>
	<div>
		<Button @click="visible = true">
			<slot>选择</slot>
		</Button>
		<Modal v-model="visible" width="970px" :mask-closable="false" @on-ok="getSelItems" :scrollable="true">
			<div  slot="header">
				<span style="font-size: 18px;">选择城市:</span><span id="tips">(最多只能选择{{maxItemNum}}项):</span>
			</div>
			<div style="height:653px; ">
				<div class="panel-content">
					<div class="show-area nui-scroll">
						<div class="show-item-div">
							<span v-for="selItem in selItems" class="show-item" @click="toggleSel(selItem)">
								<span>
									{{selItem.name}}
								</span>
								<em></em>
							</span>
						</div>
						<div class="tips-area" v-show="showErrTip">
							<p id="funtype_click_multiple_error" class="error-tips">最多只能选择{{maxItemNum}}项</p>
						</div>
					</div>
					<!-- 左侧列表 -->
					<div class="panel-left nui-scroll">
						<div class="item" v-for="item of items" :class="{'item-sel':item.id == currItem.id}" @click="activeCurr(item)">
							{{item.name}}
						</div>
					</div>
					<!-- 中间列表 -->
					<div class="panel-right nui-scroll">
						<!-- 两项的处理 -->
						<div v-if="level == 2" class="sub-div-no-child">
							<div class="sub-item" :style="{'min-width': rowWidth + '%'}" v-if="showSelAll">
								<span class="leaf-item" @click="toggleSel(currItem)" :class="isSel(currItem)">所有</span>
							</div>
							<template v-for="(item,index) in currItem.children">
								<div class="sub-item" :style="{'min-width': rowWidth + '%'}">
									<span :class="isSel(item)" @click="toggleSelSub(currItem,item)">{{item.name}}</span>
								</div>
							</template>
						</div>
						<!-- 3项的处理 -->
						<div class="sub-div nui-scroll" v-else>
							<template v-for="item,index in currItem.children">
								<div class="sub-item" :style="{'min-width': rowWidth + '%'}">
									<span :class="isSel(item)" @click="showSubItem(item)">{{item.name}}</span>
									<!-- 									<span :class="isSel(item)" @click="showSubItem(item)" v-if="hasChildren(item)">{{item.name}}</span> -->
									<!-- <span :class="isSel(item)" @click="toggleSel(item)" v-else>{{item.name}}</span> -->
								</div>
							</template>
						</div>
						<!--  使用弹出层进行展示 -->
						<div v-for="item,index in currItem.children" class="leaf-div" v-if="level == 3 && hasChildren(item)" v-show="currSelId == item.id">
							<span class="leaf-item" @click="toggleSel(item)" :class="isSel(item)" v-if="showSelAll" :style="{'min-width': leafRowWidth + '%'}">所有</span>
							<span v-for="subItem in item.children" class="leaf-item" @click="toggleSelSub(item,subItem)" :class="isSel(subItem)"
							 :style="{'min-width': leafRowWidth + '%'}">
								{{subItem.name}}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	</div>
</template>
<script>
	import {
		Modal,
		Button
	} from 'iview';
	export default {
		name: 'vue-panel-selector',
		props: {
			items: {
				type: Array,
				required: true
			},
			maxItemNum: {
				type: Number,
				default: 10
			},
			// 层级:2or3
			level: {
				type: Number,
				default: 2,
				validator: function(value) {
					return [2, 3].includes(value);
				}
			},
			showSelAll: {
				type: Boolean,
				default: false
			},
			row: {
				type: Number,
				default: 5
			}
		},
		data() {
			return {
				visible: false,
				currItem: null,
				selItems: [], // 选中的项
				currSelId: '', // 当前选中节点Id
				showErrTip: false,
			}
		},
		computed: {
			rowWidth: function() {
				return 100 / this.row;
			},
			leafRowWidth: function() {
				return 92 / this.row;
			}
		},
		methods: {
			activeCurr(item) {
				this.currItem = item;
			},
			toggleSel(item) {
				if (this.selItems.includes(item)) {
					this.cancelSel(item);
				} else {
					this.sel(item);
					if (this.showSelAll) {
						this.calcelChildSel(item);
					}
				}
			},
			calcelChildSel(item) { // 取消选中的子项
				let subItems = item.children || [];
				subItems.forEach((subItem, index) => {
					this.cancelSel(subItem);
				});
			},
			toggleSelSub(item, subItem) {
				// 是否选择了父级项
				if (this.showSelAll) {
					let index = this.selItems.indexOf(item);
					if (index >= 0) {
						this.selItems.splice(index, 1);
					}
				}
				this.toggleSel(subItem);
			},
			showSubItem(item) {
				this.currSelId = item.id;
			},
			isSel(item) {
				let cls = {}
				if (this.selItems.includes(item)) {
					cls['subItem-sel'] = true;
				}
				return cls;
			},
			hasChildren(item) {
				let chArr = item.children || [];
				return chArr.length > 0;
			},
			cancelSel(item) {
				this.showErrTip = false;
				let index = this.selItems.indexOf(item);
				if (index >= 0) {
					this.selItems.splice(index, 1);
				}
			},
			sel(item) {
				// 选中数量为最大选中数
				if (this.selItems.length >= this.maxItemNum) {
					this.showErrTip = true;
					return;
				}
				this.selItems.push(item);
			},
			getSelItems() {
				let items = [];
				this.selItems.forEach((val) => {
					items.push(Object.assign({}, val));
				});
				this.$emit('on-ok', items);
			}
		},
		created: function() {
			this.currItem = this.items[0];
		}
	}
</script>
<style src="./base.css"></style>
