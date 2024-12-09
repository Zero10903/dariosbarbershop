<template>
	<section class="welcome">
		<h1 class="welcome__title">
			Bienvenido a <span class="accent-color">Dario's Barbershop</span>
		</h1>
		<img src="../assets/images/hero.jpg" alt="hero" class="welcome__hero" />
		<p class="welcome__epigraph">
			Un corte de cabello es más que sólo un corte de cabello.
		</p>
		<p class="welcome__description">
			En <span class="accent-color">Dario's Barbershop</span>, nos esforzamos
			por crear una experiencia única y relajante para cada uno de nuestros
			clientes. Nuestro dueño y barbero,
			<span class="accent-color">Dario</span>, tiene años de experiencia en el
			cuidado del cabello y la barba, y se compromete a brindar un servicio
			excepcional a cada cliente.
		</p>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.welcome {
	&__hero {
		@include layout.rounded($rounded);
	}
	&__epigraph {
		font-size: 0.8rem;
		font-style: italic;
		margin: 0.1rem 0rem 1rem;
	}
}
</style>
