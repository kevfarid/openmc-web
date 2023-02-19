import { DownloadIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';
import { TargetAndTransition, motion } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';
import Icons from '../Icons';

const MotionImage = chakra(motion.img);
const MotionIcon = chakra(motion.div);

const animation = (value: number): TargetAndTransition => ({
  y: value,
  transition: {
    repeat: Infinity,
    repeatType: 'reverse',
    duration: 1,
  },
});

export default function Hero({
  title,
  subtitle,
  ButtonText,
  LinkDestination,
  ButtonDestination,
  compatibilityIcons,
}: Props) {
  return (
    <Box h="100vh" pos="relative" as="section" id="home">
      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Center
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        flexDir="column"
        gap={18}
        bg="rgb(128, 90, 213, 0.81)"
      >
        <Center flexDir="column" gap={3}>
          <MotionImage
            src="/images/logo.svg"
            animate={animation(10)}
            alt="Logo"
            width="128"
            height="128"
          />
          <Heading size="4xl" fontWeight="bold" as="h1">
            {title || 'Default title'}
          </Heading>
        </Center>
        <Text fontSize="2xl" as="h2" textAlign="center" width="24rem">
          {subtitle || 'Default subtitle'}
        </Text>
        <Button
          colorScheme="blue"
          variant="solid"
          size="lg"
          as={NextLink}
          leftIcon={<DownloadIcon />}
          href={ButtonDestination || '/'}
          scroll={false}
        >
          {ButtonText || 'Default ButtonText'}
        </Button>
        <Stack direction="row">
          {compatibilityIcons?.map((icon) => (
            <Icon key={icon} as={Icons[icon]} boxSize="24px" />
          ))}
        </Stack>
        {LinkDestination && (
          <Link as={NextLink} href={LinkDestination} scroll={false}>
            <MotionIcon
              animate={animation(10)}
              pos="absolute"
              bottom={20}
              style={{ cursor: 'pointer' }}
            >
              <Icon as={TriangleDownIcon} w={5} h={5} />
            </MotionIcon>
          </Link>
        )}
      </Center>
    </Box>
  );
}

type Props = {
  title: string;
  subtitle: string;
  ButtonText: string;
  LinkDestination?: string;
  ButtonDestination?: string;
  compatibilityIcons?: string[];
};
