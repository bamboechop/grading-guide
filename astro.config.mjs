import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'unplugin-icons/vite';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ['./src/css/tailwind.css'],
      editLink: {
        baseUrl: 'https://github.com/bamboechop/',
      },
      sidebar: [{
        label: 'Guides',
        items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Example Guide',
          link: '/guides/example/'
        }]
      }, {
        label: 'Reference',
        autogenerate: {
          directory: 'reference'
        }
      }],
      social: {
        github: 'https://github.com/withastro/starlight',
        twitter: 'https://twitter.com/bamboechop'
      },
      title: 'Grading Guide'
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [Icons({
      compiler: 'astro'
    })]
  }
});
