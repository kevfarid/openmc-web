import { Stack } from '@chakra-ui/react';
import AboutCard from '../AboutCard/AboutCard';
import IAboutCard from '../AboutCard/IAboutCard';

export default function About({ cards }: Props) {
  return (
    <Stack
      direction={['row']}
      justify="center"
      as="section"
      gap="60px"
      paddingX={20}
      paddingY={40}
      flexWrap="wrap"
    >
      {cards.map((card) => (
        <AboutCard
          name={card.name}
          description={card.description}
          icon={card.icon}
          link={card.link}
          key={card.name}
        />
      ))}
    </Stack>
  );
}

type Props = {
  cards: IAboutCard[];
};
