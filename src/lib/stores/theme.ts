import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

// Initialize theme from local storage or user preference
const userTheme = browser && localStorage.getItem('theme');
const prefersDark = browser && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initial theme value
const initialValue: Theme = userTheme ? (userTheme as Theme) : prefersDark ? 'dark' : 'light';

export const theme = writable<Theme>(initialValue);

// Update local storage and document class when theme changes
export function toggleTheme() {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    if (browser) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
    return newTheme;
  });
}

// Initialize the theme on the client side
export function initializeTheme() {
  if (browser) {
    theme.subscribe((value) => {
      document.documentElement.classList.toggle('dark', value === 'dark');
    });
  }
}

