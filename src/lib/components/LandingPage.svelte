<script lang="ts">
    import { GradientButton } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { onMount } from 'svelte';
    import { loadSlim } from '@tsparticles/slim';
    import { animateScroll } from 'svelte-scrollto-element';
    
    const dispatch = createEventDispatcher();
    
    // Detect if we're on a mobile device to adjust particles
    let isMobile = false;
    
    onMount(() => {
        // Check if we're on mobile
        isMobile = window.innerWidth < 768;
        
        // Update on resize
        const handleResize = () => {
            isMobile = window.innerWidth < 768;
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    $: particlesConfig = {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: isMobile ? 150 : 150, // Reduce particles on mobile
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
                value: isMobile ? 4 : 5, // Smaller particles on mobile
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
                distance: isMobile ? 200 : 150, // Shorter links on mobile
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: isMobile ? 5 : 5, // Slower movement on mobile
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
                    distance: isMobile ? 140 : 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: isMobile ? 2 : 4
                }
            }
        },
        retina_detect: true
    };
    
    let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles;
    };

    void particlesInit(async (engine) => {
        await loadSlim(engine);
    });
</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
/>

<main class="relative z-1 flex justify-center items-center text-center min-h-screen w-screen flex-col px-4 py-8 md:py-10">

  <div class="my-2 md:my-0">
      <img src="./images/hackJPS-logo.png" alt="HACKJPS-LOGO" class="h-[250px] md:h-[400px] max-w-full">
  </div>

    <div class="md:text-7xl text-4xl font-mono font-bold text-green-300 pt-0 md:pt-0 mb-5">
        COMING SOON
    </div>


  <div class="text-sm font-mono font-bold text-neutral-400 mx-4 md:mx-0 md:text-lg max-w-md md:max-w-2xl">
      A beginner-friendly hackathon held in person and virtually at John P. Stevens High School
  </div>
  
  <div class="text-xs md:text-sm mx-4 md:mx-0 text-neutral-500 font-semibold font-mono mt-3 max-w-md md:max-w-2xl">
      HACKJPS 2025 will be hosted on Saturday, June 15th, stay tuned for updates! Join our Discord or see the archive section for past resources
  </div>

  <div class="flex flex-col md:flex-row justify-center mt-6 md:mt-10 gap-4 md:gap-5 w-full md:w-fit px-4 md:px-0">
    <a href="https://discord.gg/KCU5qG7R9m" class="w-full md:w-auto">
        <GradientButton outline color="cyanToBlue" class="w-full">
            <div class="gap-2 md:gap-3 p-2 flex items-center justify-center">
                <img src="./images/discord-logo.png" alt="Discord" class="h-[18px] md:h-[24px]">
                <div class="text-white text-sm md:text-lg">Discord</div>
            </div>
        </GradientButton>
    </a>
    <a href="https://hackjps25.devpost.com" class="w-full md:w-auto">       
        <GradientButton outline color="purpleToPink" class="w-full">
            <div class="gap-2 md:gap-3 p-2 flex items-center justify-center">
                <img src="./images/devpost-logo.png" alt="Devpost" class="h-[18px] md:h-[24px]">
                <div class="text-white text-sm md:text-lg">Devpost</div>
            </div>
        </GradientButton>
    </a>
    <a href={'#archive'} class="w-full md:w-auto">
        <GradientButton outline color="pinkToOrange" class="w-full" on:click={() => {dispatch('about', '#archive')}}> 
            <div class="gap-2 md:gap-3 p-2 flex items-center justify-center">
                <img src="./images/archive-icon.png" alt="Archive" class="h-[18px] md:h-[24px]">
                <div class="text-white text-sm md:text-lg">Archive</div>
            </div>
        </GradientButton>
    </a>
  </div>
</main>