interface HeaderSingleItem {
  label: string
  link: string
  items?: never
  image?: never
  imageAlt?: never
  text?: never
  accentColorClass?: never
}

interface HeaderGroupItem {
  label: string
  items: HeaderSingleItem[]
  image: string
  imageAlt: string
  text: string
  accentColorClass: string
  link?: never
}

export type HeaderItem = HeaderGroupItem | HeaderSingleItem

export const headerItems: HeaderItem[] = [
  {
    label: 'Services',
    image: 'header_solutions',
    imageAlt: 'Couple of people looking at phone',
    text: 'Find all of our Quaife products and how we can help your business accept more payments.',
    accentColorClass: 'bg-[#ffedf3]',
    items: [
      { label: 'Merchant Account', link: '/merchant-account' },
      { label: 'Platforms', link: '/platforms' },
      { label: 'Payment Links', link: '/payment-links' },
      { label: 'Fraud Management', link: '/fraud-management' },
      { label: 'Chargeback Management', link: '/chargeback' },
      { label: 'PCI and ASV Scanning', link: '/pci' },
    ],
  },
  {
    label: 'Resources',
    image: 'header_resources',
    imageAlt: 'Peace of code',
    text: 'Find all of our Quaife products and how we can help your business accept more payments.',
    accentColorClass: 'bg-[#ededff]',
    items: [
      { label: 'API Documentation', link: '#' },
      { label: 'Help Center', link: '#' },
      { label: 'Checkout  Guide', link: '/checkout-guide' },
      { label: 'Chargeback API', link: '#' },
    ],
  },
  { label: 'Partners', link: '/partners' },
  { label: 'News', link: '#' },
]
