<template>
	<section class="service card">
		<p class="service__text"><slot></slot></p>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.service {
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;

		background-color: $dark-accent-color;

		height: 100%;
		width: 100%;
		max-width: 0%;

		transition: $transition-time max-width;
	}
	&:hover::after {
		max-width: 100%;
	}
	&__text {
		position: relative;
		z-index: 2;
		font-weight: 500;
	}
}
</style>
