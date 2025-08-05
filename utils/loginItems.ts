interface LoginSingleItem {
  label: string
  link: string
  items?: never
  image?: never
  imageAlt?: never
  text?: never
  accentColorClass?: never
}

interface LoginGroupItem {
  label: string
  items: LoginSingleItem[]
  image: string
  imageAlt: string
  text: string
  accentColorClass: string
  link?: never
}

export type LoginItem = LoginGroupItem | LoginSingleItem

export const loginItems: LoginItem[] = [
  {
    label: 'Resources',
    image: 'login_resources',
    imageAlt: 'Peace of form',
    text: 'Find all of our Quaife products and how we can help your business accept more payments.',
    accentColorClass: 'bg-[#F6F6F6]',
    items: [
      { label: 'Payment Gateway', link: 'https://quaife.ctpe.info' },
      { label: 'Onboarding', link: 'https://quaife.moxo.com/' },
      { label: 'Agent Portal', link: 'https://agentportal.qashpay.com' },
      { label: 'Dispute Management', link: 'https://disputes.qashpay.com/' },
      { label: 'PCI and ASV Scanning', link: 'https://pci.qashpay.com' },
    ],
  },
]
