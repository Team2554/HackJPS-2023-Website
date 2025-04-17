<script>
    import { GradientButton } from 'flowbite-svelte';
</script>

<main class="flex justify-center items-center text-center h-screen w-screen flex-col pt-10"> 
    <div class="text-7xl font-mono font-bold text-green-300">
        COMING SOON
    </div>
    <div>
        <img src="src/lib/images/hackJPS-logo.png" alt="HACKJPS-LOGO" class="max-h-[500px]">
    </div>

    <!-- description -->
    <div class="text-lg font-mono font-bold text-neutral-400">
        A beginner-friendly hackathon held in person and virtually at John P. Stevens High School
    </div>
    <div class="text-sm text-neutral-500 font-semibold font-mono mt-3">
        HACKJPS 2025 will be hosted on a saturday in June 2025, stay tuned for updates! Join our Discord or see the archive section for past resources
    </div>

    <!-- buttons -->
    <div class="flex justify-center mt-10 gap-5">
        <GradientButton outline color="cyanToBlue" class="gap-3">
            <div class="gap-3 p-2 flex ">
                <img src="src/lib/images/discord-logo.png" alt="Discord" class="h-[24px]">
                <div class="text-white text-lg">Discord</div>
            </div>
        </GradientButton>
        <GradientButton outline color="tealToLime" class="gap-3">
            <div class="gap-3 p-2 flex ">
                <img src="src/lib/images/archive-icon.png" alt="Archive" class="h-[24px]">
                <div class="text-white text-lg">Archive</div>
            </div>
        </GradientButton>
    </div>
</main>