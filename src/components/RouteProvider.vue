<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'
import { RouteLocationNormalizedLoaded, routeLocationKey } from 'vue-router'

export default defineComponent({
	name: 'RouteProvider',
})
</script>

<script setup lang="ts">
const props = defineProps<{
	route: RouteLocationNormalizedLoaded
}>()

const route = reactive(props.route)
provide(routeLocationKey, route)
</script>

<template>
	<slot />
</template>
