<template>
	<section class="promos">
		<h2 class="promos__title">Promociones</h2>
		<img
			src="../assets/images/promos.svg"
			alt="promos image"
			class="promos__image"
			loading="lazy" />
		<p class="promos__text">
			Dentro de <span class="accent-color">Dario's Barbershop</span> podrás
			encontrar diversas promociones y servicios gratuitos que serán de tu
			agrado. Algunos de los cuales son:
		</p>
		<ul class="promos__list">
			<PromoComponent v-for="data in PromoData" :key="data.id">
				{{ data.name }}
				<template #description>{{ data.description }}</template>
			</PromoComponent>
		</ul>
	</section>
</template>

<script lang="ts" setup>
import PromoData from './promotions/PromoData';
import PromoComponent from './promotions/PromoComponent.vue';
</script>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.promos {
	@include layout.flexCenter(column, 1rem);

	&__image {
		filter: drop-shadow($dark-shadow);
	}
	&__list {
		@include layout.gridCenter(1rem);
	}
}

@media (min-width: $tablet) {
	.promos {
		&__list {
			@include layout.grid(3);
			place-items: start;
		}
	}
}
</style>
