import Link from "next/link";
import Image from "next/image";
import UnityGame from "@/components/UnityGame";

export const metadata = {
  title: "Jugar — Nightfall Pain",
};

const controls = [
  { keys: ["W", "A", "S", "D"], action: "Moverse" },
  { keys: ["Ratón"], action: "Apuntar" },
  { keys: ["Clic izq."], action: "Disparar" },
  { keys: ["Shift"], action: "Correr" },
  { keys: ["R"], action: "Reiniciar nivel" },
  { keys: ["ESC"], action: "Pausa" },
];

function KeyCap({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 rounded-sm border border-[var(--accent)]/50 bg-black/50 text-[var(--accent)] text-xs tracking-wide shadow-[0_0_8px_rgba(242,255,0,0.15)]"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {label}
    </span>
  );
}

export default function PlayPage() {
  return (
    <div className="flex flex-col flex-1 px-6 py-8">
      <header className="w-full flex items-center justify-between max-w-6xl mx-auto mb-4">
        <Link
          href="/"
          className="text-sm tracking-widest text-accent"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ← VOLVER
        </Link>
      </header>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative w-40 h-24 sm:w-48 sm:h-28 mb-2">
          <Image
            src="/images/nightmain.png"
            alt="Nightfall Pain"
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(255,46,196,0.4)]"
            priority
          />
        </div>
        <h1
          className="text-glow text-3xl sm:text-4xl tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-[var(--cyan)]">NIGHTFALL</span>{" "}
          <span className="text-[var(--magenta)] italic">PAIN</span>
        </h1>
      </div>

      <main className="flex-1 flex flex-col lg:flex-row items-start justify-center gap-6 max-w-6xl mx-auto w-full">
        <UnityGame />

        <aside className="w-full lg:w-64 shrink-0 panel-border rounded-lg p-5 bg-[var(--panel)]/70">
          <h2
            className="text-[var(--accent)] text-base mb-4 tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CONTROLES
          </h2>
          <div className="flex flex-col gap-4">
            {controls.map((c) => (
              <div key={c.action} className="flex items-center justify-between gap-3">
                <div className="flex gap-1 flex-wrap">
                  {c.keys.map((k) => (
                    <KeyCap key={k} label={k} />
                  ))}
                </div>
                <span className="text-xs text-white/60 text-right">{c.action}</span>
              </div>
            ))}
          </div>
        </aside>
      </main>

      <p className="text-xs text-white/40 max-w-md text-center mx-auto mt-8">
        El juego pesa varios MB, dale un momento a la carga la primera vez.
      </p>
    </div>
  );
}
