<script lang="ts">
    import { animateScroll } from 'svelte-scrollto-element';
    import LandingPage from "$lib/components/LandingPage.svelte";
    import AboutUs from "$lib/components/AboutUs.svelte";
    import Faq from "$lib/components/FAQ.svelte";

    // let aboutSection: HTMLDivElement;
    // function onClickScroll(section: HTMLDivElement | undefined) {
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     } else {
    //         console.warn("Scroll target is undefined");
    //     }
    // }

    let aboutSection: HTMLElement;

    function scrollToSection(section: HTMLElement) {
        animateScroll.scrollTo({ element: "#aboutUs", offset: -116})
    };

</script>

<main>
    <div class="flex justify-center items-center text-center h-screen w-screen flex-col"> 
        <LandingPage on:about={(e) => {scrollToSection(aboutSection); console.log("here")}}/>
    </div>

    <div class="" id="aboutUs" bind:this={aboutSection}>
        <AboutUs/>
    </div>

    <div class="bg-neutral-800 pt-10">
        <div class="h-[2px] bg-neutral-500 mx-36 rounded-sm">
        </div>
    </div>

    <div>
        <Faq/>
    </div>
</main>