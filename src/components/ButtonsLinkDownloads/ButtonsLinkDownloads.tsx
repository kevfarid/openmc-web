import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import ILink from './Link.interface';
import Link from 'next/link';

export default function ButtonsLinkDownloads({ links }: Props) {
  return (
    <Flex gap={3} flexDir="column" justifyContent="center">
      {links.map((link) => (
        <Button
          key={link.name}
          colorScheme="blue"
          variant="outline"
          as={Link}
          href={link.link}
          download
          gap={1}
        >
          <Icon as={DownloadIcon} w={5} h={5} />
          {link.name}
        </Button>
      ))}
    </Flex>
  );
}

type Props = {
  links: ILink[];
};
