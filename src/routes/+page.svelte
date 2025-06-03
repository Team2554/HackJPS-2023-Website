<script lang="ts">
    import { animateScroll } from 'svelte-scrollto-element';
    import LandingPage from "$lib/components/LandingPage.svelte";
    import AboutUs from "$lib/components/AboutUs.svelte";
    import Faq from "$lib/components/FAQ.svelte";
	import Archive from '$lib/components/Archive.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';

    function scrollToSection(section: string) {
        animateScroll.scrollTo({ element: section, offset: -116})
    };

</script>

<main>
    <div class="flex justify-center items-center text-center h-screen w-screen flex-col"> 
        <LandingPage on:about={(e) => {scrollToSection(e.detail);}} class="z-10"/>
    </div>

    <div class="" id="aboutUs">
        <AboutUs/>
    </div>

    <!-- divider bar (ui lib doesnt have one ig)-->
    <div class="bg-neutral-800 pt-10">
        <div class="h-[2px] bg-neutral-500 mx-5 md:mx-36 rounded-sm">
        </div>
    </div>

    <div>
        <Faq/>
    </div>

    <div>
        <Archive/>
    </div>

    <div>
        <Sponsors/>
    </div>
</main>