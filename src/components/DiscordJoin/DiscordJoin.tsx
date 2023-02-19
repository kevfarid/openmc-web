import { Button, Card, Center, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export default function DiscordJoin({ title, linkDiscord, buttonText }: Props) {
  return (
    <Card
      p={4}
      w="100%"
      maxW="400px"
      borderRadius="lg"
      boxShadow="lg"
      bgImage="url('/images/discord.png')"
      minHeight="248px"
      maxWidth="1000px"
      bgPosition={{ base: 'center', md: 'right 75% bottom 80%' }}
      bgSize={{ base: '1318px' }}
    >
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justify={{ base: 'center' }}
        height={{ base: '248px' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Center flex="2" height="248px">
          <Heading
            as="h2"
            size="xl"
            color="white"
            width="435px"
            ml={{ base: 0, md: 60 }}
          >
            {title}
          </Heading>
        </Center>
        <Center flex="1">
          <Button
            colorScheme="orange"
            variant="solid"
            size="lg"
            as={Link}
            href={linkDiscord || '/'}
          >
            {buttonText}
          </Button>
        </Center>
      </Flex>
    </Card>
  );
}

type Props = {
  title: string;
  linkDiscord: string;
  buttonText: string;
};
