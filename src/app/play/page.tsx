import Link from "next/link";
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
      className="inline-flex items-center justify-center min-w-[2.25rem] h-9 px-2 rounded-sm border border-[var(--accent)]/40 bg-black/40 text-[var(--accent)] text-xs tracking-wide"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {label}
    </span>
  );
}

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

      <main className="flex-1 flex flex-col items-center gap-8 pb-8">
        <UnityGame />

        <section className="w-full max-w-[1600px] panel-border rounded-lg p-6 bg-[var(--panel)]/70">
          <h2
            className="text-[var(--accent)] text-lg mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CONTROLES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {controls.map((c) => (
              <div key={c.action} className="flex flex-col items-center gap-2 text-center">
                <div className="flex gap-1 flex-wrap justify-center">
                  {c.keys.map((k) => (
                    <KeyCap key={k} label={k} />
                  ))}
                </div>
                <span className="text-xs text-white/60">{c.action}</span>
              </div>
            ))}
          </div>
        </section>

        <p className="text-xs text-white/40 max-w-md text-center">
          El juego pesa varios MB, dale un momento a la carga la primera vez.
        </p>
      </main>
    </div>
  );
}
