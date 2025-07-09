export const nav_links: navLinksTypes = [
  {
    title: 'О нас',
    link: '#about-us',
  },
  {
    title: 'Услуги',
    link: '#pleasures',
  },
  {
    title: 'Карьера',
    link: '#career',
  },
  {
    title: 'Контакты',
    link: '#contacts',
  },
];

interface INavLink {
  title: string,
  link: string,
}

type navLinksTypes = INavLink[];
