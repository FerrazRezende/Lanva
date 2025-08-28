import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#8E44AD',
          secondary: '#27AE60',
          accent: '#95A5A6',
          highlight: '#BB8FCE',
          support: '#48C9B0',
          background: '#F8F9FA',
          surface: '#FFFFFF',
        }
      },
      dark: {
        colors: {
          primary: '#5B2C6F',
          secondary: '#145A32',
          accent: '#566573',
          highlight: '#7D3C98',
          support: '#117864',
          background: '#111827',
          surface: '#1F2937',
        }
      }
    }
  }
})
