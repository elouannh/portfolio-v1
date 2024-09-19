import type { Ref } from 'vue';

type StarProps = {
  x: number;
  y: number;
  z: number;
};

type StarContent = Record<'spawn' | 'current', StarProps>;

export default function (
  ctxRef: Ref<CanvasRenderingContext2D>,
  width: number,
  height: number,
  zIndex: number,
  density: number
): void {
  const ctx: CanvasRenderingContext2D = ctxRef.value;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'var(--home-intro-bg);';

  const stars: StarContent[] = [];
  let [x, y]: [number, number] = [0, 0];
  let spawnCoords: StarProps;
  let coords: StarContent;
  while (y < height / density) {
    if (x >= width / density) {
      y++;
      x = 0;
    }
    while (stars.length < density * 10) {
    }
    spawnCoords = {
      x: Math.random() * (width / density) + (x * width / density),
      y: Math.random() * (height / density) + (y * height / density),
      z: zIndex,
    };
    coords = {
      spawn: spawnCoords,
      current: spawnCoords
    };
    stars.push(coords);

    x++;
  }
};