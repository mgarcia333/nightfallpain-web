# Nightfall Pain — Web

Portal web para jugar a **[Nightfall Pain](https://github.com/mgarcia333/nightfallpain)**
(shooter 2D cyberpunk hecho en Unity) directamente en el navegador, sin instalar nada.

🎮 **Producción:** https://nightfallpain-web.mgarciap.workers.dev/

## Stack

- **[Next.js](https://nextjs.org)** (App Router) exportado como sitio **100% estático**
  (`output: "export"`) — sin servidor, sin funciones, apto para cualquier hosting estático.
- **Tailwind CSS** para los estilos.
- **TypeScript**.
- Carga del juego mediante el **loader oficial de Unity WebGL** (`createUnityInstance`),
  integrado en `src/components/UnityGame.tsx`.

## Diseño

Reutiliza la identidad visual del propio juego en vez de un estilo genérico:

- Tipografías originales `Cyberpunks` y `Cyberway Riders` (`public/fonts/`).
- Paleta amarillo/cian/magenta sobre fondo morado oscuro, igual que los menús del juego.
- Arte del juego (logo, fondo de victoria) como elementos visuales del hero (`public/images/`).

## Estructura

```
src/app/
  page.tsx          Portal / landing (hero, CTA, características)
  play/page.tsx      Página donde se juega (embebe UnityGame)
  globals.css        Fuentes @font-face + paleta de color del juego
src/components/
  UnityGame.tsx      Carga y arranca la build WebGL de Unity en un <canvas>
public/
  fonts/             Tipografías del juego
  images/            Arte del juego usado en la web
  game/Build/        Aquí va la build WebGL exportada desde Unity (aún no generada)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Sin la build WebGL en `public/game/Build/`, la página `/play` carga pero muestra un
> error al intentar arrancar el juego — es esperado hasta que se copie la build.

## Actualizar la build jugable del juego

1. En el proyecto de Unity: `File > Build Settings > WebGL > Build`, con **Build Name**
   `NightfallPain`.
2. Copia el contenido de la carpeta `Build/` generada a `public/game/Build/` en este
   repositorio (deben quedar `NightfallPain.loader.js`, `NightfallPain.data`,
   `NightfallPain.framework.js`, `NightfallPain.wasm`).
3. Prueba en local con `npm run dev` antes de desplegar.

## Build de producción

```bash
npm run build
```

Genera el sitio estático en `out/`. Esa carpeta es la que se despliega.

## Despliegue (Cloudflare)

- **Comando de build:** `npm run build`
- **Carpeta de salida:** `out`
- No requiere runtime de servidor ni variables de entorno — es HTML/CSS/JS estático.

## Proyecto relacionado

El código del juego (Unity) vive en un repositorio aparte:
👉 https://github.com/mgarcia333/nightfallpain
