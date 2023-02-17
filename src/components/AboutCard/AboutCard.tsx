import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import IAboutCard from './IAboutCard';

export default function AboutCard({
  name,
  description,
  icon,
  link,
}: IAboutCard) {
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      justify="center"
      p="1rem"
      gap="0.6rem"
      maxW="315px"
    >
      <Image src={icon} alt={name} width={50} height={50} />
      <Heading as="h2" size="lg" color="white">
        {name}
      </Heading>
      <Text as="p" color="white" textAlign="center">
        {description}
      </Text>
      {link && (
        <Button
          colorScheme="blue"
          variant="outline"
          size="md"
          as={Link}
          href={link}
        >
          Learn more
        </Button>
      )}
    </Flex>
  );
}
