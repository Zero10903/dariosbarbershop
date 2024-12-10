<template>
	<section class="service">
		<p class="service__text"><slot></slot></p>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.service {
	padding: 1rem;
	position: relative;
	overflow: hidden;

	filter: drop-shadow($dark-shadow);

	color: $light-color;
	background-color: $accent-color;
	@include layout.rounded($rounded, (top-left, bottom-right));

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
