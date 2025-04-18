<script>
    import { GradientButton } from 'flowbite-svelte';
    import { archiveData } from '../data/archive';
</script>

<main class="bg-neutral-700 pt-10 px-36 pb-10">
    <section class=" bg-neutral-700" id="archive">
        <p class="text-center text-3xl font-semibold font-mono text-green-300 mb-6">
          Check out past HackJPS events!
        </p>
        
        {#each archiveData as year}
            <div class="mt-10 mb-8">
                <p class="text-center text-3xl font-black my-auto lg:pb-0 pb-2 mx-10 text-green-200 font-mono">
                    {year.year}
                </p>
                <p class="text-center text-sm text-neutral-400 italic font-mono pt-4">
                    {year.organizers}
                </p>
                
                <div class="text-center text-white text-[80%] font-medium font-mono mt-1 flex justify-center flex-col lg:flex-row gap-4 pt-8">
                    {#each year.resources as resource}
                        <a href={resource.link} target="_blank">
                            <GradientButton shadow color={resource.style} size="md" class="w-4/5 lg:w-auto mx-auto lg:mx-0 ">
                                <div class="flex items-center gap-2">
                                    <i class={resource.icon}></i> {resource.title}
                                </div>
                            </GradientButton>
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </section>
</main>
