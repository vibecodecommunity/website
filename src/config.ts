import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
  codeOptions: {
    wrap: boolean
    lineNumbers: boolean
  }
}

export default {
  author: 'John Doe',
  title: 'Neobrutalism blog template',
  description: 'Lorem ipsum dolor sit amet',
  lang: 'en',
  themes: {
    dark: 'dracula',
    light: 'github-light',
  },
  codeOptions: {
    wrap: true,
    lineNumbers: true,
  }
} satisfies Config



