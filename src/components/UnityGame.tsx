"use client";

import { useEffect, useRef, useState } from "react";

// Unity WebGL build output goes in public/game/Build/, exported from
// Unity with Build Name "NightfallPain" (File > Build Settings > WebGL > Build).
const BUILD_NAME = "NightfallPain";
const BUILD_URL = "/game/Build";

declare global {
  interface Window {
    createUnityInstance?: (
      canvas: HTMLCanvasElement,
      config: Record<string, unknown>,
      onProgress?: (progress: number) => void
    ) => Promise<{ Quit: () => Promise<void> }>;
  }
}

export default function UnityGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const script = document.createElement("script");
    script.src = `${BUILD_URL}/${BUILD_NAME}.loader.js`;
    script.onload = () => {
      if (!window.createUnityInstance) {
        setError("No se pudo inicializar el motor del juego.");
        return;
      }
      window
        .createUnityInstance(
          canvas,
          {
            dataUrl: `${BUILD_URL}/${BUILD_NAME}.data`,
            frameworkUrl: `${BUILD_URL}/${BUILD_NAME}.framework.js`,
            codeUrl: `${BUILD_URL}/${BUILD_NAME}.wasm`,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "NightfallPain",
            productName: "Nightfall Pain",
            productVersion: "1.0",
          },
          (p) => setProgress(p)
        )
        .then(() => setReady(true))
        .catch((err: unknown) => {
          console.error(err);
          setError("No se pudo cargar el juego. Comprueba que la build WebGL este publicada.");
        });
    };
    script.onerror = () => setError("No se encontro la build del juego en /game/Build.");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full aspect-video max-w-5xl mx-auto bg-black rounded-lg overflow-hidden panel-border">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ visibility: ready ? "visible" : "hidden" }}
      />
      {!ready && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/80">
          <span style={{ fontFamily: "var(--font-heading)" }} className="tracking-wide text-[var(--accent)]">
            CARGANDO...
          </span>
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-white/70 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
