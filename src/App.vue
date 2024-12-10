<template>
	<section class="container">
		<WelcomeComponent />
		<ServicesComponent />
		<PromotionsComponent />
		<SchedulesComponent />
		<ContactComponent />
	</section>
</template>

<script lang="ts" setup>
import WelcomeComponent from './components/WelcomeComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import PromotionsComponent from './components/PromotionsComponent.vue';
import SchedulesComponent from './components/SchedulesComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
</script>

<style lang="scss">
@use './assets/sass/reset';
@use './assets/sass/layout';
@use './assets/sass/config' as *;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
	color: $dark-color;
	background-color: $light-color;
}
h1 {
	font-size: 1.5rem;
	font-family: 'Montserrat', sans-serif;
}
h2 {
	font-size: 1.25rem;
	font-family: 'Montserrat', sans-serif;
	font-style: italic;
}
h1,
h2 {
	padding-bottom: 0.5rem;
}
p {
	font-size: 1rem;
	font-family: 'Roboto', sans-serif;
}
.container {
	padding: 1rem;
	@include layout.grid(1);
	place-items: center;
}
.accent-color {
	color: $accent-color;
}
</style>
