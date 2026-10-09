<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })
  const colorMode = useColorMode()
  const { proxy } = useScriptCloudflareWebAnalytics()

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Simple.takumi', { title: t('title'), description: t('description') })

  const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <div class="mx-auto w-full max-w-6xl space-y-20 px-6 py-12 sm:px-10 lg:px-20">
    <section class="space-y-10" data-aos="fade-up">
      <PageHeader :title="t('title')" />
      <div class="max-w-3xl space-y-6 text-lg leading-relaxed text-obsidian/85 dark:text-snow/80">
        <p>
          {{ t('paragraph1') }}
        </p>
        <p>
          {{ t('paragraph2') }}
        </p>
        <p>
          {{ t('paragraph3') }}
        </p>
      </div>
    </section>
    <section class="space-y-10" data-aos="fade-up">
      <div class="text-center sm:text-start">
        <h2 class="inline-block border-b-2 border-candy pb-1 text-4xl text-obsidian dark:text-snow">
          {{ t('experience') }}
        </h2>
      </div>
      <ol class="relative ms-4 border-s border-candy/30">
        <li class="ms-8">
          <span
            class="absolute -inset-s-4 flex size-8 items-center justify-center rounded-full bg-candy ring-4 ring-pearl dark:ring-onyx">
            <ClientOnly>
              <Icon
                v-if="isDark"
                name="cc:cbpf-l"
                size="1.5rem"
                class="text-pearl dark:text-onyx" />
              <Icon v-else name="cc:cbpf-d" size="1.5rem" class="text-pearl dark:text-onyx" />
              <template #fallback>
                <Icon
                  name="iconoir:refresh"
                  size="1.5rem"
                  class="animate-spin text-pearl dark:text-onyx" />
              </template>
            </ClientOnly>
          </span>
          <div
            class="rounded-2xl border border-obsidian/10 bg-milk/70 p-6 dark:border-snow/10 dark:bg-eclipse/70">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div class="space-y-1">
                <NuxtLink
                  to="https://cbpf.br"
                  external
                  target="_blank"
                  class="block text-xl leading-tight font-medium text-obsidian transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:text-snow dark:hover:text-candy">
                  {{ t('cbpf') }}
                </NuxtLink>
                <p class="text-obsidian/90 dark:text-snow/70">
                  {{ t('engineer_devops') }}
                </p>
              </div>
              <p
                class="rounded-full border border-candy/50 bg-candy/10 px-3 py-1 text-sm whitespace-nowrap text-obsidian dark:text-candy">
                {{ t('twnt') }}
              </p>
            </div>
            <div class="mt-5 space-y-4 leading-relaxed text-obsidian/90 dark:text-snow/75">
              <p>
                {{ t('cbpf_description1') }}
              </p>
              <p>
                {{ t('cbpf_description2') }}
              </p>
              <p>
                {{ t('cbpf_description3') }}
              </p>
              <p>
                {{ t('cbpf_description4') }}
              </p>
              <p>
                {{ t('cbpf_description5') }}
              </p>
              <p>
                {{ t('cbpf_description6') }}
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "About me",
    "description": "find out the techie stuff Im into, a bunch of pics, and the certificates that make me look legit. Its me in a nutshell, no fluff. Enjoy!",
    "paragraph1": "I'm a Software Engineer and DevOps professional with experience in full-stack development and infrastructure. I work across frontend and backend, focusing on building solutions that are simple, scalable, and easy to maintain.",
    "paragraph2": "My background includes Nuxt, Vue, Next, React, Node.js, Go, and TypeScript, along with Tailwind CSS. On the backend, I have worked with MongoDB, SQL, and LDAP integrations.",
    "paragraph3": "In DevOps, I use Docker, CI/CD pipelines, and Linux environments to deploy and manage services. I also apply automated testing with Vitest to ensure stability and continuous improvement.",
    "experience": "Experience",
    "cbpf": "Brazilian Center for Physics Research",
    "engineer_devops": "Software Engineer & DevOps",
    "twnt": "2019 - present",
    "cbpf_description1": "At the Brazilian Center for Physics Research (CBPF), I am responsible for modernizing the institution's technological infrastructure and developing solutions that support its internal systems. I led the full migration of legacy PHP 5 applications to modern stacks such as Nuxt and Go, bringing enhanced security, scalability, and performance to our services.",
    "cbpf_description2": "I manage the deployment and configuration of the central web server using Nginx with HTTP/3 and Docker, as well as the central database infrastructure, which integrates PostgreSQL, MongoDB, and Redis in a stable, high-availability environment.",
    "cbpf_description3": "I designed and maintain the institution's Single Sign-On (SSO), ensuring secure and unified authentication across CBPF's systems. I also set up authoritative and recursive DNS servers (primary and secondary), and implemented GitLab and GitLab Runners, enabling code versioning, CI/CD automation, and seamless collaboration across research and development teams.",
    "cbpf_description4": "In addition, I deployed third-party tools such as Umami and Uptime Kuma for analytics and uptime monitoring, and I create and maintain technical documentation with VitePress, ensuring clarity and accessibility of processes and systems.",
    "cbpf_description5": "My work also involves configuring and securing servers (typically running Ubuntu), setting up firewalls, network rules, and security best practices. As the technical lead of the team, I also mentor colleagues and interns in programming, system administration, and DevOps practices.",
    "cbpf_description6": "Furthermore, I assist in the deployment and integration of the LDAP server across CBPF projects, and in setting up secure access infrastructure with OpenVPN, strengthening both reliability and security across the institution's environment."
  },
  "pt": {
    "title": "Sobre mim",
    "description": "Conheça minha jornada profissional, as coisas de tecnologia que curto, um monte de fotos e os certificados que me fazem parecer respeitável. É tudo sobre mim, sem enrolação. Aproveitem!",
    "paragraph1": "Sou Engenheiro de Software e DevOps, com experiência em desenvolvimento full-stack e infraestrutura. Trabalho tanto em frontend quanto em backend, sempre buscando soluções simples, escaláveis e fáceis de manter.",
    "paragraph2": "Tenho experiência com Nuxt, Vue, Next, React, Node.js, Go e TypeScript, além de Tailwind CSS. No backend, atuo com MongoDB, SQL e integrações com LDAP.",
    "paragraph3": "Na área de DevOps, utilizo Docker, pipelines de CI/CD e ambientes Linux para deploy e manutenção de serviços. Também aplico testes automatizados com Vitest para garantir estabilidade e evolução contínua dos projetos.",
    "experience": "Experiência",
    "cbpf": "Centro Brasileiro de Pesquisas Físicas",
    "engineer_devops": "Engenheiro de Software & DevOps",
    "twnt": "2019 - presente",
    "cbpf_description1": "No Centro Brasileiro de Pesquisas Físicas (CBPF), sou responsável pela modernização da infraestrutura tecnológica e pelo desenvolvimento de soluções que sustentam os sistemas institucionais. Conduzi a migração completa do legado em PHP 5 para tecnologias modernas como Nuxt e Go, trazendo mais segurança, escalabilidade e desempenho para os serviços internos.",
    "cbpf_description2": "Também sou responsável pela implantação e configuração do servidor web central, utilizando Nginx com suporte a HTTP/3 e conteinerização com Docker, além da administração do banco de dados central, que integra PostgreSQL, MongoDB e Redis em um ecossistema estável e de alta disponibilidade.",
    "cbpf_description3": "Desenvolvo e mantenho o SSO (Single Sign-On) da instituição, garantindo autenticação única e segura para os diversos sistemas do CBPF. Além disso, implementei servidores DNS autoritativos e recursivos (primários e secundários), bem como a instalação e configuração do GitLab e de GitLab Runners, viabilizando o versionamento de código, automação de pipelines e integração contínua para os times de pesquisa e desenvolvimento.",
    "cbpf_description4": "Participei ativamente da implantação de ferramentas de monitoramento e análise como Umami e Uptime Kuma, e sou responsável pela criação de documentações técnicas com VitePress, garantindo registro claro e acessível dos processos e sistemas.",
    "cbpf_description5": "Grande parte da minha atuação envolve a configuração e segurança de servidores (geralmente em Ubuntu), incluindo firewalls, regras de rede e boas práticas de proteção de dados. Também atuo como responsável técnico da equipe, orientando colegas e estagiários em programação, administração de sistemas e melhores práticas em DevOps.",
    "cbpf_description6": "Além disso, contribuo na implantação e integração do servidor LDAP nos projetos do CBPF, assim como na configuração de infraestrutura de acesso seguro via VPN (OpenVPN), reforçando a confiabilidade e a segurança do ambiente institucional."
  }
}
</i18n>
