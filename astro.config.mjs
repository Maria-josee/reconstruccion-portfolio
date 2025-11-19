// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    // URL de tu repositorio. Reemplaza 'Maria-josee' y 'nombre-del-repo'
  site: 'https://Maria-josee.github.io', 
  // Nombre de tu repositorio en GitHub
  base: '/reconstruccion-portfolio', 
  // Otras configuraciones (opcionales)
  integrations: [
    starlight({
      // 👇 Mínimo obligatorio
      title: 'Informe de Gaussian Splatting',
      // aquí después puedes ir agregando más cosas (sidebar, i18n, etc.)
    }),
  ],
});