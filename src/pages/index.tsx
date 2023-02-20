import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Path from '@/components/Header/Path';
import IAboutCard from '@/components/AboutCard/IAboutCard';
import About from '@/components/About';
import Changelog from '@/components/Changelog';
import Downloads from '@/components/Downloads';
import Tab from '@/components/Downloads/Tab.interface';
import DiscordJoin from '@/components/DiscordJoin';
import SocialMedia from '@/components/Footer/SocialMedia';
import Change from '@/components/Changelog/Change';
import Footer from '@/components/Footer';

import { getChangelog } from '@/services/changelog';
import useLang from '@/hooks/useLang';

export default function Home() {
  const [changes, setChanges] = useState<Change[]>([]);

  useEffect(() => {
    getChangelog().then((data) => {
      setChanges(data[0].splice(0, 6));
    });
  }, []);

  const { t } = useLang();

  return (
    <>
      <Header title={t('title')} paths={t<Path[]>('header.paths')} />
      <Hero
        title={t('title')}
        subtitle={t('hero.subtitle')}
        ButtonText={t('download')}
        LinkDestination="#about"
        ButtonDestination="#download"
        compatibilityIcons={t<string[]>('hero.compatibility.icons')}
      />
      <About cards={t<IAboutCard[]>('about.cards')} />
      <Changelog title={t('changelog.title')} changes={changes} />
      <Downloads tabs={t<Tab[]>('download.tabs')} title={t('download.title')} />
      <Center as="section" id="discord" mb="40">
        <DiscordJoin
          title={t('discord.title')}
          linkDiscord={t('discord.link')}
          buttonText={t('discord.button')}
        />
      </Center>
      <Footer
        socialMedia={t<SocialMedia[]>('footer.social-media')}
        title={t('title')}
      />
    </>
  );
}
