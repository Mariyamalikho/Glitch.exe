import { useRef, useEffect } from 'react';

/**
 * Minigame component for repairing corrupted memory sketches.
 */
export function SketchCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="sketch-container flex justify-center items-center p-4">
      <canvas ref={canvasRef} className="sketch-canvas border border-cyan/30" />
    </div>
  );
}
