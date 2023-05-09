<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'AboutPage',
})
</script>

<script setup lang="ts">
const route = useRoute()

console.log(route)
watch(route, () => {
	console.log('route changed', route)
})
</script>

<template>
	<div class="about-page">about</div>
</template>

<style lang="scss" scoped>
.about-page {
}
</style>
