import { createI18n } from 'vue-i18n'

const messages = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      contact: 'Contato'
    },
    hero: {
      title: 'Editor de Design Moderno',
      subtitle: 'Crie layouts incríveis com uma interface intuitiva e ferramentas poderosas. Projeto pessoal desenvolvido com Vue.js, TypeScript e Fabric.js.',
      cta: {
        primary: 'Experimentar Demo',
        secondary: 'Ver no GitHub'
      }
    },
    features: {
      title: 'Recursos Principais',
      subtitle: 'Tecnologias modernas para uma experiência de design excepcional',
      items: {
        design: {
          title: 'Interface Intuitiva',
          description: 'Editor visual com arrastar e soltar, construído com Vue 3 e Composition API para máxima performance.'
        },
        export: {
          title: 'Exportação Flexível',
          description: 'Exporte seus designs em múltiplos formatos: PNG, JPG, SVG com qualidade profissional.'
        },
        responsive: {
          title: 'Design Responsivo',
          description: 'Interface adaptável que funciona perfeitamente em desktop, tablet e dispositivos móveis.'
        }
      }
    },
    footer: {
      description: 'Projeto open-source desenvolvido para demonstrar habilidades em desenvolvimento frontend moderno.',
      rights: 'Disponível no GitHub sob licença MIT.'
    }
  },
  'en': {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Modern Design Editor',
      subtitle: 'Create amazing layouts with an intuitive interface and powerful tools. Personal project built with Vue.js, TypeScript and Fabric.js.',
      cta: {
        primary: 'Try Demo',
        secondary: 'View on GitHub'
      }
    },
    features: {
      title: 'Key Features',
      subtitle: 'Modern technologies for an exceptional design experience',
      items: {
        design: {
          title: 'Intuitive Interface',
          description: 'Visual editor with drag and drop, built with Vue 3 and Composition API for maximum performance.'
        },
        export: {
          title: 'Flexible Export',
          description: 'Export your designs in multiple formats: PNG, JPG, SVG with professional quality.'
        },
        responsive: {
          title: 'Responsive Design',
          description: 'Adaptive interface that works perfectly on desktop, tablet and mobile devices.'
        }
      }
    },
    footer: {
      description: 'Open-source project developed to showcase modern frontend development skills.',
      rights: 'Available on GitHub under MIT license.'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'en',
  messages
})

export default i18n
