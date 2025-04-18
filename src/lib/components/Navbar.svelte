<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { animateScroll } from 'svelte-scrollto-element';
    
    // Keep these props for transparency
    let navbarProps = {
      fluid: true,
      rounded: false,
      border: false,
      color: "none"
    };
  import { onMount } from 'svelte';
  let scrolledPastHero = false;
  
  onMount(() => {
    const handleScroll = () => {
      scrolledPastHero = window.scrollY > 100; 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <main>
    <div class={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolledPastHero ? 'bg-neutral-900 shadow-md' : ''}`}>
      <Navbar {...navbarProps} class="container mx-auto">
        <NavBrand href="/">
          <img src="src/lib/images/hackJPS-logo.png" class="me-3 h-[96px] max-w-auto" alt="HackJPS Logo" />
          <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-green-500 text-green-600 font-mono">HackJPS 2025</span>
        </NavBrand>
        
        <NavHamburger />
        
        <NavUl class="font-mono ">
          <NavLi href="/#aboutUs" on:click={() => {animateScroll.scrollTo({element: "#aboutUs", offset: -116})}} class="text-xl text-green-200">About</NavLi>
          <NavLi href="/archive" class="text-xl">Archive</NavLi>
        </NavUl>
      </Navbar>
    </div>
  </main>
  
  <style>
    /* Keep these styles to ensure transparency */
    :global(nav), 
    :global(.navbar), 
    :global(.navbar div), 
    :global(.navbar ul) {
      background-color: transparent !important;
      backdrop-filter: none !important;
      box-shadow: none !important;
      border: none !important;
    }
    
    /* Fix mobile menu background */
    :global(.navbar div[id^="navbar-"]) {
      background-color: rgba(0, 0, 0, 0.8) !important;
    }
  </style>