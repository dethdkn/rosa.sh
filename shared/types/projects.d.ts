export interface Projects {
  title: string
  badges: Badges[]
  urls: { url: string; external: boolean; icon: string; aria: string }[]
  description: { en: string; pt: string }
}
