import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Path from '@/components/Header/Path';

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

  return (
    <>
      <Header title="OpenMc" paths={paths} />
      <Hero
        title="OpenMc"
        subtitle="An open source Minecraft launcher and mod manager"
        ButtonText="Download"
        LinkDestination="#About"
      />
    </>
  );
}
