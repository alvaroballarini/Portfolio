# Portfolio de Álvaro Ballarini

Portfolio profesional construido con Next.js 15, React 19 y TypeScript. El sitio está orientado a oportunidades Full Stack y Backend, con foco en productos B2B, datos y performance.

## Desarrollo local

```bash
npm install
npm run dev
```

La versión estática se genera con:

```bash
npm run build
```

El resultado queda en `out/`.

## Configuración SEO pendiente

Copiar `.env.example` a `.env.local` y reemplazar `NEXT_PUBLIC_SITE_URL` si el portfolio usa un dominio propio. La URL configurada se utiliza en canonical, Open Graph, Twitter, sitemap y `robots.txt`.

## Contenido por completar

Las secciones del caso de estudio de DevForges ya están creadas en `src/lib/project.ts`. Los siguientes campos se dejaron deliberadamente vacíos para no inventar información:

- año;
- problema;
- solución;
- funcionalidades;
- decisiones técnicas;
- resultados;
- próximos pasos;
- URL de demo.

Cuando esa información esté disponible, basta con completar el objeto `devforges`; la página `/proyectos/devforges` se actualiza automáticamente.
