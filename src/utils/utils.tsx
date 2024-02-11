// utils.ts

export function navToggle(): void {
  const btn: HTMLElement | null = document.getElementById('menu-btn');
  const menu: HTMLElement | null = document.getElementById('menu');

  if (btn && menu) {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
  }
}
