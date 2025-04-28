<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	export const prerender = true;
</script>

<main>
	<Navbar/>
	<slot />
	<Footer/>
</main>

