<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RouteProvider from './RouteProvider.vue'

export default defineComponent({
	name: 'TabView',
	components: { RouteProvider },
})
</script>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const tabs = reactive<string[]>([route.fullPath])
const currentTab = ref(0)

const routeFullPath = computed(() => route.fullPath)

const resolvedTab = computed(() =>
	tabs.map((tab, index) => {
		const resolved = router.resolve(tab)
		return {
			resolved,
			active: index === currentTab.value,
		}
	}),
)

function selectTab(index: number) {
	currentTab.value = index
	router.push(tabs[index])
}

function addTab() {
	let cur = tabs[currentTab.value]

	if (!cur) cur = '/'
	currentTab.value = tabs.push(cur) - 1
}

watch(routeFullPath, fullPath => {
	tabs[currentTab.value] = fullPath
})
</script>

<template>
	<div class="tab-view">
		<div class="tabs">
			<button
				v-for="(tab, index) of tabs"
				:key="index"
				class="tab-btn"
				:class="{ active: index === currentTab }"
				@click="selectTab(index)"
			>
				{{ tab }}
			</button>

			<button @click="addTab">Add</button>
		</div>

		<RouterView
			v-for="tab of resolvedTab"
			:key="tab.resolved.fullPath"
			:route="tab.resolved"
			class="tab"
			:class="{ active: tab.active }"
		/>
	</div>
</template>

<style lang="scss" scoped>
.tab-view {
	.tabs {
		.tab-btn {
			&.active {
				background-color: red;
			}
		}
	}

	.tab {
		display: none;

		&.active {
			display: block;
		}
	}
}
</style>
