<script setup lang="ts">
import TabView from './components/TabView.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
	<div>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/contact">Contact</RouterLink>

		<hr />

		<TabView />
	</div>
</template>

<style scoped></style>
