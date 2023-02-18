import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Path from '@/components/Header/Path';
import IAboutCard from '@/components/AboutCard/IAboutCard';
import About from '@/components/About';
import Changelog from '@/components/Changelog';
import Downloads from '@/components/Downloads';
import Tab from '@/components/Downloads/Tab.interface';

export default function Home() {
  const paths: Path[] = [
    {
      name: 'Home',
      link: '#home',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Download',
      link: '#download',
    },
  ];

  const cards: IAboutCard[] = [
    {
      name: 'Open Source',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus elit at lectus auctor pretium. Maecenas iaculis dolor ut leo dictum, et tempor nisl ullamcorper. Pellentesque convallis dui nec nulla.',
      icon: '/icons/open-source.svg',
      link: '#OpenSource',
    },
    {
      name: 'Minimalist',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus elit at lectus auctor pretium. Maecenas iaculis dolor ut leo dictum, et tempor nisl ullamcorper. Pellentesque convallis dui nec nulla.',
      icon: '/icons/minimalist.svg',
      link: '#CrossPlatform',
    },
    {
      name: 'Free',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus elit at lectus auctor pretium. Maecenas iaculis dolor ut leo dictum, et tempor nisl ullamcorper. Pellentesque convallis dui nec nulla.',
      icon: '/icons/manager.svg',
      link: '#Free',
    },
  ];

  const tabs: Tab[] = [
    {
      name: 'Windows',
      icon: 'Windows',
      links: [
        {
          name: 'Download Last Version (32/64-bit)',
          link: '#',
        },
      ],
    },
    {
      name: 'MacOS',
      icon: 'Apple',
      links: [
        {
          name: 'Download for Intel',
          link: '#',
        },
        {
          name: 'Download for Apple Silicon',
          link: '#',
        },
      ],
    },
    {
      name: 'Linux',
      icon: 'Linux',
      links: [
        {
          name: 'Download AppImage',
          link: '#',
        },
        {
          name: 'Download tar.gz',
          link: '#',
        },
      ],
    },
  ];

  return (
    <>
      <Header title="OpenMc" paths={paths} />
      <Hero
        title="OpenMc"
        subtitle="An open source Minecraft launcher and mod manager"
        ButtonText="Download"
        LinkDestination="#about"
        ButtonDestination="#download"
      />
      <About cards={cards} />
      <Changelog title="Changelog" changes={[]} />
      <Downloads tabs={tabs} title="Downloads" />
    </>
  );
}
