import { Heading, Icon, Spacer, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../Icons';
import SocialMedia from './SocialMedia';

export default function Footer({ title, socialMedia }: Props) {
  const getYear = () => new Date().getFullYear();

  return (
    <Stack
      direction="row"
      spacing="1rem"
      align="center"
      py="1rem"
      px="35px"
      as="footer"
      borderTop="1px solid #393939"
    >
      <Heading
        as="h2"
        size="md"
        display="inline-flex"
        alignItems="center"
        gap="0.5rem"
      >
        <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
        {title}
        <Text as="span" fontSize="md" fontWeight="400">
          © {getYear()}
        </Text>
      </Heading>
      <Spacer />
      <Stack direction="row" spacing="1rem">
        {socialMedia.map((social) => (
          <Link href={social.link} key={social.name}>
            <Icon as={Icons[social.icon]} boxSize="20px" />
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}

type Props = {
  title: string;
  socialMedia: SocialMedia[];
};
