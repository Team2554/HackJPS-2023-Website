<script lang="ts">
    import { GradientButton } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';

    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { onMount } from 'svelte';
    import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
    import { animateScroll } from 'svelte-scrollto-element';
    
    const dispatch = createEventDispatcher();


    let particlesConfig = {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#A5D6A7'
            },
            shape: {
                type: 'triangle'
            },
            opacity: {
                value: 0.7,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            links: {
                enable: true,
                color: '#A5D6A7',
                distance: 150,
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    };
    
    let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    void particlesInit(async (engine) => {
        // call this once per app
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(main);
        await loadSlim(engine);
    });

</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
/>
<main class="relative z-1 flex justify-center items-center text-center h-screen w-screen flex-col pt-10">
  <div class="text-7xl font-mono font-bold text-green-300">
      COMING SOON
  </div>
  <div>
      <img src="src/lib/images/hackJPS-logo.png" alt="HACKJPS-LOGO" class="max-h-[500px]">
  </div>

  <div class="text-lg font-mono font-bold text-neutral-400">
      A beginner-friendly hackathon held in person and virtually at John P. Stevens High School
  </div>
  <div class="text-sm text-neutral-500 font-semibold font-mono mt-3">
      HACKJPS 2025 will be hosted on a saturday in June 2025, stay tuned for updates! Join our Discord or see the archive section for past resources
  </div>

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
          <GradientButton outline color="pinkToOrange" class="gap-3" on:click={() => {dispatch('about', '#archive')}}> 
              <div class="gap-3 p-2 flex ">
                  <img src="src/lib/images/archive-icon.png" alt="Archive" class="h-[24px]">
                  <div class="text-white text-lg">Archive</div>
              </div>
          </GradientButton>
      </a>
  </div>
</main>