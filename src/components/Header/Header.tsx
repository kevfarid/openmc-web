import { Flex, Heading, Link, Spacer, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import Path from './Path';

export default function Header({ title, paths = [] }: Props) {
  return (
    <Flex
      pos="fixed"
      top="0"
      zIndex="1"
      as="header"
      width="100%"
      paddingX="35px"
      paddingY="16px"
      bgColor="rgba(0, 0, 0, 0.1)"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <Heading as="h1" size="md" color="white">
        {title}
      </Heading>
      <Spacer />
      <Stack direction="row" spacing={4}>
        {paths.map((path) => (
          <Link
            as={NextLink}
            href={path.link || '#'}
            key={path.name}
            scroll={false}
          >
            {path.name}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
}

type Props = {
  title: string;
  paths?: Path[];
};
