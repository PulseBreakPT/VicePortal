// Pure geometry, independent of React and DOM. Keep effects within small visual bounds.
export const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
export function pointerEffects(rect, clientX, clientY) {
  const x = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
  const y = clamp((clientY - rect.top) / Math.max(1, rect.height), 0, 1);
  return { x: x * 100, y: y * 100, rx: (0.5-y)*5, ry: (x-0.5)*5, dx: (x-0.5)*6, dy: (y-0.5)*4 };
}
export function parallaxOffset(rect, height) {
  return clamp((height/2 - rect.top - rect.height/2)*0.035, -16, 16);
}
