<template>
	<section class="services">
		<h2 class="services__title">Servicios</h2>
		<img
			class="services__image"
			src="../assets/images/barber.svg"
			alt="barber svg"
			loading="lazy" />
		<ul class="services__list">
			<li class="services__item" v-for="data in ServiceData" :key="data.id">
				<ServiceComponent>{{ data.name }}: ${{ data.price }}</ServiceComponent>
			</li>
		</ul>
	</section>
</template>

<script lang="ts" setup>
import ServiceData from './services/ServiceData';
import ServiceComponent from '@/components/services/ServiceComponent.vue';
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.services {
	@include layout.flexCenter(column, 1rem);

	&__image {
		filter: drop-shadow($dark-shadow);
	}
	&__list {
		@include layout.grid(1, 1rem);
	}
}
</style>
