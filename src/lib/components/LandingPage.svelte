<script lang="ts">
    import { GradientButton } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

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

    <!-- buttons with links -->
    <div class="flex justify-center mt-10 gap-5">
        <a href="https://discord.gg/KCU5qG7R9m">
            <GradientButton outline color="cyanToBlue" class="gap-3">
                <div class="gap-3 p-2 flex ">
                    <img src="src/lib/images/discord-logo.png" alt="Discord" class="h-[24px]">
                    <div class="text-white text-lg">Discord</div>
                </div>
            </GradientButton>
        </a>
        <a href="https://hackjps25.devpost.com">       
            <GradientButton outline color="purpleToPink" class="gap-3">
                <div class="gap-3 p-2 flex ">
                    <img src="src/lib/images/devpost-logo.png" alt="Archive" class="h-[24px]">
                    <div class="text-white text-lg">Devpost</div>
                </div>
            </GradientButton>
        </a>
        <a href={'#archive'}>
            <GradientButton outline color="pinkToOrange" class="gap-3" on:click={() => {dispatch('about', '#aboutUs')}}> 
                <div class="gap-3 p-2 flex ">
                    <img src="src/lib/images/archive-icon.png" alt="Archive" class="h-[24px]">
                    <div class="text-white text-lg">Archive</div>
                </div>
            </GradientButton>
        </a>
    </div>
</main>