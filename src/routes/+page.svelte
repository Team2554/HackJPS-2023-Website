<script>
    import LandingPage from "$lib/components/LandingPage.svelte";
    import AboutUs from "$lib/components/AboutUs.svelte";
    import Faq from "$lib/components/FAQ.svelte";
</script>

<main>
    <div class="flex justify-center items-center text-center h-screen w-screen flex-col"> 
        <LandingPage/>
    </div>

    <div>
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