import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'

import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    expressiveCode({
      themes: ['dracula', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black',
        },
        uiFontFamily: 'inherit',
        borderColor: '#80808080',
      },
      themeCssSelector: (theme) => 
        theme === 'github-light' ? 'html:not(.dark)' : 'html.dark',
      useThemedShiki: true,
      defaultProps: {
        wrap: true
      },
    }),
    mdx(),
  ],
})