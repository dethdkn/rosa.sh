import type { KVNamespace } from '@cloudflare/workers-types'

const sample: Record<string, unknown> = {
  projects: [
    {
      title: 'SSO - CBPF',
      badges: [
        {
          title: 'Vue.JS',
          icon: 'vscode-icons:file-type-vue',
          color: '#41B883',
        },
        {
          title: 'Nuxt.JS',
          icon: 'vscode-icons:file-type-nuxt',
          color: '#2DDC82',
        },
        {
          title: 'TailwindCSS',
          icon: 'devicon:tailwindcss',
          color: '#38BDF8',
        },
        {
          title: 'GO',
          icon: 'vscode-icons:file-type-go-gopher',
          color: '#6AD7E5',
        },
        {
          title: 'Docker',
          icon: 'vscode-icons:file-type-docker',
          color: '#039CC7',
        },
        {
          title: 'OAUTH',
          icon: 'devicon:oauth',
          color: '#FFFFFF',
        },
      ],
      urls: [
        {
          url: 'https://sso.cbpf.br',
          external: true,
          icon: 'iconoir:open-new-window',
          aria: 'URL',
        },
      ],
      description: {
        en: '🫆 Single Sign-On (SSO) system for CBPF',
        pt: '🫆 Sistema de autenticação única (SSO) para o CBPF',
      },
    },
    {
      title: 'UNIPOSRIO',
      badges: [
        {
          title: 'Vue.JS',
          icon: 'vscode-icons:file-type-vue',
          color: '#41B883',
        },
        {
          title: 'Nuxt.JS',
          icon: 'vscode-icons:file-type-nuxt',
          color: '#2DDC82',
        },
        {
          title: 'TailwindCSS',
          icon: 'devicon:tailwindcss',
          color: '#38BDF8',
        },
        {
          title: 'GO',
          icon: 'vscode-icons:file-type-go-gopher',
          color: '#6AD7E5',
        },
        {
          title: 'Docker',
          icon: 'vscode-icons:file-type-docker',
          color: '#039CC7',
        },
      ],
      urls: [
        {
          url: 'https://uniposrio-fisica.cbpf.br',
          external: true,
          icon: 'iconoir:open-new-window',
          aria: 'URL',
        },
      ],
      description: {
        en: '🎓 Registration portal for UNIPÓSRIO',
        pt: '🎓 Portal de inscrições para a UNIPÓSRIO',
      },
    },
    {
      title: 'LAB-IA',
      badges: [
        {
          title: 'Vue.JS',
          icon: 'vscode-icons:file-type-vue',
          color: '#41B883',
        },
        {
          title: 'Nuxt.JS',
          icon: 'vscode-icons:file-type-nuxt',
          color: '#2DDC82',
        },
        {
          title: 'TailwindCSS',
          icon: 'devicon:tailwindcss',
          color: '#38BDF8',
        },
        {
          title: 'GO',
          icon: 'vscode-icons:file-type-go-gopher',
          color: '#6AD7E5',
        },
        {
          title: 'Docker',
          icon: 'vscode-icons:file-type-docker',
          color: '#039CC7',
        },
      ],
      urls: [
        {
          url: 'https://labia.cbpf.br',
          external: true,
          icon: 'iconoir:open-new-window',
          aria: 'URL',
        },
      ],
      description: {
        en: '🤖 Exploring the Future with Science and Intelligence',
        pt: '🤖 Explorando o Futuro com Ciência e Inteligência',
      },
    },
    {
      title: 'Ldap Studio',
      badges: [
        {
          title: 'Swift',
          icon: 'devicon:swift',
          color: '#F05139',
        },
        {
          title: 'C',
          icon: 'devicon:c',
          color: '#659AD3',
        },
      ],
      urls: [
        {
          url: 'https://github.com/dethdkn/ldap-studio',
          external: true,
          icon: 'iconoir:github-circle',
          aria: 'Github Repo',
        },
        {
          url: 'https://github.com/dethdkn/ldap-studio/releases',
          external: true,
          icon: 'iconoir:cloud-download',
          aria: 'Download',
        },
      ],
      description: {
        en: '🔍 A native macOS LDAP client for browsing, searching, and editing LDAP directories.',
        pt: '🔍 Um cliente LDAP nativo para macOS, para navegar, pesquisar e editar diretórios LDAP.',
      },
    },
  ],
  certificates: [
    {
      href: '/certificates/DNSSEC_Udemy.pdf',
      title: 'DNSSec - Secure DNS',
      subtitle: '🎓 Udemy',
      concluded: '09/2026',
      badges: [
        {
          title: 'DNS',
          icon: 'iconoir:dns',
          color: '#297df2',
        },
      ],
    },
    {
      href: '/certificates/Advanced_C_Udemy.pdf',
      title: 'Advanced C Programming Course',
      subtitle: '🎓 Udemy',
      concluded: '09/2026',
      badges: [
        {
          title: 'C',
          icon: 'devicon:c',
          color: '#659AD3',
        },
      ],
    },
    {
      href: '/certificates/PowerBI_Udemy.pdf',
      title: 'Microsoft Power BI - The Practical Guide',
      subtitle: '🎓 Udemy',
      concluded: '08/2026',
      badges: [
        {
          title: 'Power BI',
          icon: 'vscode-icons:file-type-powerbi',
          color: '#F0C93B',
        },
      ],
    },
    {
      href: '/certificates/Claude_Cowork_Udemy.pdf',
      title: 'Claude Cowork - The Practical Guide',
      subtitle: '🎓 Udemy',
      concluded: '08/2026',
      badges: [
        {
          title: 'Claude Cowork',
          icon: 'logos:claude-icon',
          color: '#D97757',
        },
      ],
    },
    {
      href: '/certificates/Claude_Code_Udemy.pdf',
      title: 'Claude Code - The Practical Guide',
      subtitle: '🎓 Udemy',
      concluded: '08/2026',
      badges: [
        {
          title: 'Claude Code',
          icon: 'logos:claude-icon',
          color: '#D97757',
        },
      ],
    },
    {
      href: '/certificates/OAuth_Udemy.pdf',
      title: 'The Nuts and Bolts of OAuth 2.0',
      subtitle: '🎓 Udemy',
      concluded: '10/2025',
      badges: [
        {
          title: 'OAuth',
          icon: 'devicon:oauth',
          color: '#FFFFFF',
        },
      ],
    },
  ],
}

function get(key: string): Promise<string | null> {
  return Promise.resolve(key in sample ? JSON.stringify(sample[key]) : null)
}

export default defineNitroPlugin(() => {
  if (!import.meta.dev) return

  // oxlint-disable-next-line typescript/no-unsafe-type-assertion
  globalThis.KV ??= { get } as unknown as KVNamespace
})
