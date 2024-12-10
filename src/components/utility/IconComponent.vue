<template>
	<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<slot></slot>
	</svg>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.icon {
	@include layout.square(2rem);
	filter: drop-shadow($dark-shadow);
	fill: $accent-color;

	transition: $transition-time fill;
	&:hover {
		fill: $dark-accent-color;
	}
}
</style>
