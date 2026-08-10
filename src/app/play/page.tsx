import Link from "next/link";
import UnityGame from "@/components/UnityGame";

export const metadata = {
  title: "Jugar — Nightfall Pain",
};

export default function PlayPage() {
  return (
    <div className="flex flex-col flex-1 px-6 py-8">
      <header className="w-full flex items-center justify-between max-w-6xl mx-auto mb-8">
        <Link
          href="/"
          className="text-sm tracking-widest text-accent"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ← NIGHTFALL PAIN
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-6">
        <UnityGame />
        <p className="text-xs text-white/40 max-w-md text-center">
          El juego pesa varios MB, dale un momento a la carga. Usa WASD para moverte
          y el raton para apuntar.
        </p>
      </main>
    </div>
  );
}
