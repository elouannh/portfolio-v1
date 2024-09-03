import { onMounted, onUnmounted } from 'vue';
import Lenis from 'lenis';

export function useLenis() {
  let lenis;

  onMounted((): void => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
    });

    const raf = (time): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  });

  onUnmounted(() => lenis.destroy());

  const scrollTo = (target, options = {}): void => {
    if (lenis) lenis.scrollTo(target, options);
  };

  return { scrollTo };
}
