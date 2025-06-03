<script>
  import { sponsorData } from "$lib/data/sponsor";
</script>

<section class="bg-gradient-to-b from-neutral-700 to-neutral-900 py-5 pb-20 px-10 sm:px-6 md:px-12 lg:px-48" id="sponsors">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-2xl sm:text-3xl md:text-4xl text-green-300 font-mono text-center font-bold mb-6 sm:mb-10 drop-shadow-lg pb-5">
      Meet our Sponsors for HackJPS 2025!
    </h2>
    
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-5 md:gap-8">
      {#each sponsorData as sponsor}
        <div 
          class="bg-white/10 backdrop-blur-sm rounded-xl p-1 shadow-xl transition-all duration-300 hover:shadow-green-300/20 hover:scale-105 hover:bg-white/15 group"
          title={sponsor.name}
        >
          <div class="bg-white rounded-lg w-full aspect-square flex items-center justify-center p-3 sm:p-4 overflow-hidden">
            <img 
              src={sponsor.imageLink || "/placeholder.svg?height=150&width=150"} 
              alt="{sponsor.name} logo"
              class="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div class="text-center text-green-200 font-mono font-semibold text-sm sm:text-base my-2">
            {sponsor.name}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
