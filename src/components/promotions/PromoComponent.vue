<template>
	<section class="promo card">
		<article
			class="promo__background"
			:class="{ 'promo__background--active': isActive }"></article>
		<article class="promo__header" @click="toggleDescription">
			<p class="promo__name"><slot></slot></p>
			<IconComponent
				class="promo__icon"
				:class="{ 'promo__icon--active': isActive }">
				<path
					d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
			</IconComponent>
		</article>
		<p
			class="promo__description"
			:class="{ 'promo__description--active': isActive }">
			<slot name="description"></slot>
		</p>
	</section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconComponent from '../utility/IconComponent.vue';

const isActive = ref(false);

const toggleDescription = () => {
	isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
@use '../../assets/sass/layout';
@use '../../assets/sass/config' as *;

.promo {
	position: relative;
	overflow: hidden;

	&__background {
		height: 100%;
		width: 100%;
		max-height: 0%;
		position: absolute;
		bottom: 0;
		left: 0;

		background-color: $dark-accent-color;

		transition: $transition-time max-height;
		&--active {
			max-height: 100%;
		}
	}

	&__header {
		cursor: pointer;
		width: 100%;
		position: relative;
		@include layout.flex(row, nowrap, space-between, center, 1rem);
	}
	&__icon {
		transition: $transition-time rotate;
		&--active {
			rotate: 180deg;
		}
	}
	&__description {
		max-height: 0rem;
		padding-top: 0rem;
		position: relative;
		overflow: hidden;

		transition: $transition-time max-height, $transition-time padding-top;
		&--active {
			max-height: 10rem;
			padding-top: 0.5rem;
		}
	}
}
</style>
