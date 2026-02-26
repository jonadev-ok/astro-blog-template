import IconInstagram from '../components/icons/IconInstagram.astro';
import IconX from '../components/icons/IconX.astro';
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const socialItems = [
  { label: 'Instagram', href: 'https://instagram.com/jona.dev_ok', icon: IconInstagram },
  { label: 'X', href: 'https://x.com/jonadev_ok', icon: IconX },
]