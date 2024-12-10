<template>
	<section class="schedules">
		<h2 class="schedules__title">Horarios</h2>
		<img
			src="../assets/images/schedules.svg"
			alt="schedules image"
			class="schedules__image"
			loading="lazy" />
		<p>
			Puedes encontrarnos en
			<span class="accent-color">Barrio Villa Unión</span>, de
			<span class="accent-color">martes a domingo</span> a partir de las
			<span class="accent-color">18hs</span>. En algunas ocasiones, es probable
			que abra a la mañana. En cualquier caso, consultar vía whatsapp.
		</p>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.schedules {
	@include layout.flexCenter(column, 1rem);
	&__image {
		filter: drop-shadow($dark-shadow);
	}
}
</style>
