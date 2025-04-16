<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { Moon, Sun } from 'flowbite-svelte-icons';
</script>

<button
  on:click={toggleTheme}
  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
  aria-label="Toggle dark mode"
>
  {#if $theme === 'dark'}
    <Sun class="w-5 h-5 text-yellow-300" />
  {:else}
    <Moon class="w-5 h-5 text-gray-700" />
  {/if}
</button>

