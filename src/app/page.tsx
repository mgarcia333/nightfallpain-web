import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Modo un jugador",
    body: "Recorre seis niveles cada vez mas duros, sube de nivel a tu personaje y mejora tu equipo en la tienda.",
  },
  {
    title: "Cooperativo",
    body: "Conecta con otro jugador y enfrentaos juntos a la noche en el modo cooperativo, construido sobre Mirror Networking.",
  },
  {
    title: "Progreso local",
    body: "Tu experiencia y tus mejoras se guardan en tu propio navegador. Nada de cuentas, nada de esperas.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span
          className="text-xl tracking-widest text-accent"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NIGHTFALL PAIN
        </span>
        <Link
          href="/play"
          className="px-4 py-2 text-sm tracking-wide text-black bg-[var(--accent)] rounded-sm hover:brightness-110 transition"
        >
          Jugar
        </Link>
      </header>

      <section className="relative flex flex-col items-center text-center px-6 pt-12 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: "url(/images/fondowin.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "radial-gradient(circle at 50% 30%, black 0%, transparent 70%)",
          }}
        />

        <div className="relative w-56 h-32 sm:w-72 sm:h-40 mb-4">
          <Image
            src="/images/nightmain.png"
            alt="Nightfall Pain"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(255,46,196,0.45)]"
            priority
          />
        </div>

        <h1
          className="text-glow text-4xl sm:text-6xl tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-[var(--cyan)]">NIGHTFALL</span>{" "}
          <span className="text-[var(--magenta)] italic">PAIN</span>
        </h1>

        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70">
          Un shooter 2D cyberpunk sobre sobrevivir a la noche. Sin instalar nada,
          directo desde el navegador.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/play"
            className="px-10 py-4 text-lg tracking-wide text-black bg-[var(--accent)] rounded-sm hover:brightness-110 transition text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            JUGAR AHORA
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-4 text-lg tracking-wide text-white/80 border border-white/20 rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CODIGO FUENTE
          </a>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-5xl mx-auto grid gap-6 sm:grid-cols-3 w-full">
        {features.map((f) => (
          <div
            key={f.title}
            className="panel-border rounded-lg p-6 bg-[var(--panel)]/70"
          >
            <h2
              className="text-[var(--accent)] text-xl mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {f.title}
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">{f.body}</p>
          </div>
        ))}
      </section>

      <footer className="mt-auto px-6 py-8 text-center text-xs text-white/40 border-t border-white/10">
        Nightfall Pain — proyecto de portafolio, DAM. Hecho con Unity + Next.js.
      </footer>
    </div>
  );
}
