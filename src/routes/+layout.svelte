<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<main>
	<Navbar/>
	<slot />
	<Footer/>
</main>

