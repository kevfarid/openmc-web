import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Path from '@/components/Header/Path';
import IAboutCard from '@/components/AboutCard/IAboutCard';
import About from '@/components/About';
import Changelog from '@/components/Changelog';

export default function Home() {
  const paths: Path[] = [
    {
      name: 'Home',
      link: '#Home',
    },
    {
      name: 'About',
      link: '#About',
    },
    {
      name: 'Download',
      link: '#Download',
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

  return (
    <>
      <Header title="OpenMc" paths={paths} />
      <Hero
        title="OpenMc"
        subtitle="An open source Minecraft launcher and mod manager"
        ButtonText="Download"
        LinkDestination="#About"
      />
      <About cards={cards} />
      <Changelog title="Changelog" changes={[]} />
    </>
  );
}
